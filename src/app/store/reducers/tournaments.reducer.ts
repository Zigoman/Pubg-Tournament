import { createReducer, on } from '@ngrx/store';
import { ITournament } from '../../shared/interfaces/store.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as tournamentsActions from '../actions/tournaments.actions';

export const tournamentsFeatureKey = 'tournaments';

export function selectTournamentId(tournament: ITournament): string {
  return tournament.tournamentId;
}

export interface TournamentsState extends EntityState<ITournament> {
  selectedTournamentId: number | null;
}

export const adapter: EntityAdapter<ITournament> = createEntityAdapter<ITournament>({
  selectId: selectTournamentId
});

export const initialState: TournamentsState = adapter.getInitialState({
  selectedTournamentId: null
});

export const reducer = createReducer(
  initialState,
  on(tournamentsActions.loadTournamentsSuccess, (state, actions) => adapter.setAll(actions.tournaments, state))
);

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectAllTournaments = selectAll;

// select the array of Tournament ids
export const selectTournamentID = selectIds;

// select the dictionary of Tournament entities
export const selectTournamentEntities = selectEntities;

// select the total Tournaments count
export const selectTournamentsTotal = selectTotal;
