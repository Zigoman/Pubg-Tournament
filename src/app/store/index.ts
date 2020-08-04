import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user.reducer';

export interface AppState {
  [fromUser.usersFeatureKey]: fromUser.UserState;
  // [fromUser.usersFeatureKey]: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = { [fromUser.usersFeatureKey]: fromUser.reducer };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
