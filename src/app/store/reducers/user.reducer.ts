import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as UserActions from '../actions/user.actions';
import { IPlayer, IUser } from '../../shared/interfaces/store.interface';

export const usersFeatureKey = 'users';

export interface AppState extends EntityState<IPlayer> {
  // additional entities state properties
  error: string | null;
  user: IUser | null;
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: AppState = adapter.getInitialState({
  // additional entity state properties
  error: null,
  user: null
});

export const reducer = createReducer(
  initialState,
  on(UserActions.addUserSuccess, (state, action) => ({ ...state, user: action.user })),
  on(UserActions.addUserFailure, (state, action) => ({ ...state, error: action.error })),
  on(UserActions.loadUserSuccess, (state, action) => ({ ...state, user: action.user })),
  on(UserActions.loadUserFailure, (state, action) => ({ ...state, error: action.error }))
  // on(UserActions.loadPlayersSuccess, (state, action) => adapter.setAll(action.players, state)),
  // on(UserActions.loadPlayersFailure, (state, action) => ({ ...state, error: action.error }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
