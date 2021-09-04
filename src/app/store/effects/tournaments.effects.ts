import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromTournamentsActions from '../actions/tournaments.actions';
import { TournamentsApiService } from '../services/tournaments.httpservice';

@Injectable()
export class TournamentsEffects {
  constructor(private actions$: Actions, private apiService: TournamentsApiService) {}

  loadTournaments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTournamentsActions.loadTournaments),
      mergeMap(() =>
        this.apiService.getTournaments('1223').pipe(
          map(
            tournaments => fromTournamentsActions.loadTournamentsSuccess({ tournaments }),
            catchError(error => of(fromTournamentsActions.loadTournamentsFailure({ error })))
          )
        )
      )
    )
  );
}
