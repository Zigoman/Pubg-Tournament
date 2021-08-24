import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTournaments from '../reducers/tournaments.reducer';

export const selectTournamentsState = createFeatureSelector<fromTournaments.TournamentsState>(
  fromTournaments.tournamentsFeatureKey
);

export const selectAllTournaments = createSelector(selectTournamentsState, fromTournaments.selectAllTournaments);
