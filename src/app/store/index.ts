import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user.reducer';
import * as fromTournaments from './reducers/tournaments.reducer';

export interface AppState {
  [fromUser.usersFeatureKey]: fromUser.UserState;
  [fromTournaments.tournamentsFeatureKey]: fromTournaments.TournamentsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUser.usersFeatureKey]: fromUser.reducer,
  [fromTournaments.tournamentsFeatureKey]: fromTournaments.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
