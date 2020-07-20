import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ApiHttpService } from '../services/app.httpservice';
import { IUser } from '../../shared/interfaces/store.interface';
import { Login, LoginError, LoginSuccess, SignUp, SignUpError, SignUpSuccess } from '../actions/app.actions';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppEffects {
  constructor(
    private apiService: ApiHttpService,
    private action$: Actions,
    private AuthSrv: AuthService,
    private router: Router
  ) {}

  Login$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(Login),
      mergeMap(action =>
        this.apiService.userLogin(action.payload).pipe(
          map((user: IUser) => LoginSuccess({ payload: user })),
          catchError(err => of(LoginError({ errorMessage: err.message })))
        )
      )
    )
  );

  AddUser$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(SignUp),
      switchMap(action =>
        this.apiService.addUser(action.payload).pipe(
          map((user: IUser) => SignUpSuccess({ payload: user })),
          catchError(err => of(SignUpError({ errorMessage: err.message })))
        )
      )
    )
  );

  signUpSuccess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(SignUpSuccess),
        map(action => {
          console.log('action', action);
          if (action?.payload?.password) {
            this.AuthSrv.setToken(action.payload.password);
            this.router.navigate(['']).then();
          }
        })
      ),
    { dispatch: false }
  );

  loginSuccess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(LoginSuccess),
        map(action => {
          if (action?.payload?.password) {
            this.AuthSrv.setToken(action.payload.password);
            this.router.navigate(['']).then();
          }
        })
      ),
    { dispatch: false }
  );
}
