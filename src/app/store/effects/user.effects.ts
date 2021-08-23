import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ApiHttpService } from '../services/app.httpservice';
import * as fromUsersActions from '../actions/user.actions';
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
          map(user => fromUsersActions.loadUserSuccess({ user, redirect: true })),
          catchError(error => of(fromUsersActions.loadUserFailure({ error })))
        )
      )
    )
  );

  checkUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.CheckLogin),
      mergeMap(() =>
        this.apiService.checkUser().pipe(
          map(user => fromUsersActions.loadUserSuccess({ user, redirect: false })),
          catchError(error => of(fromUsersActions.loadUserFailure({ error })))
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.loadUser),
      mergeMap(action =>
        this.apiService.loadUser(action.user).pipe(
          map(
            user => fromUsersActions.loadUserSuccess({ user, redirect: true }),
            catchError(error => of(fromUsersActions.loadUserFailure({ error })))
          )
        )
      )
    )
  );

  loadUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsersActions.loadUserSuccess),
        tap(({ user, redirect }) => {
          this.AuthSrv.setToken(user.password);
          if (redirect) {
            this.router.navigateByUrl('').then();
          }
        })
      ),
    { dispatch: false }
  );

  loadPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.loadPlayers),
      mergeMap(() =>
        this.apiService.getPlayers().pipe(
          map(players => fromUsersActions.loadPlayersSuccess({ players })),
          catchError(error => of(fromUsersActions.loadPlayersFailure({ error })))
        )
      )
    )
  );
}
