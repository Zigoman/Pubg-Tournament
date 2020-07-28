import { Injectable } from '@angular/core';
import * as fromUsersActions from '../actions/user.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiHttpService } from '../services/app.httpservice';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiHttpService,
    private AuthSrv: AuthService,
    private router: Router
  ) {}

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.addUser),
      mergeMap(action =>
        this.apiService.addUser(action.user).pipe(
          map(user => {
            this.AuthSrv.setToken(user.password);
            return fromUsersActions.addUserSuccess({ user });
          }),
          catchError(error => of(fromUsersActions.addUserFailure({ error })))
        )
      ),
      tap(() => this.router.navigate(['']))
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.loadUser),
      mergeMap(action =>
        this.apiService.loadUser(action.user).pipe(
          map(user => {
            this.AuthSrv.setToken(user.password);
            return fromUsersActions.loadUserSuccess({ user });
          }),
          catchError(error => of(fromUsersActions.loadUserFailure({ error })))
        )
      ),
      tap(() => this.router.navigate(['']))
    )
  );

  checkUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsersActions.checkUser),
        concatMap(action => this.apiService.checkUser(action.token))
      ),
    { dispatch: false }
  );

  loadPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.loadPlayers),
      mergeMap(action =>
        this.apiService.getPlayers().pipe(
          map(players => fromUsersActions.loadPlayersSuccess({ players })),
          catchError(error => of(fromUsersActions.loadPlayersFailure({ error })))
        )
      )
    )
  );
}
