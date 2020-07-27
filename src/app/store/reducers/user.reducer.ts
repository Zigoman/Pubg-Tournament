import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as UserActions from '../actions/user.actions';
import { IUser } from '../../shared/interfaces/store.interface';

export const usersFeatureKey = 'users';

export interface AppState extends EntityState<IUser> {
  // additional entities state properties
  error: string | null;
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: AppState = adapter.getInitialState({
  // additional entity state properties
  error: null
});

export const reducer = createReducer(
  initialState,
  on(UserActions.addUserSuccess, (state, action) => adapter.addOne(action.user, state)),
  on(UserActions.addUserFailure, (state, action) => ({ ...state, error: action.error })),
  on(UserActions.deleteUserSuccess, (state, action) => adapter.removeOne(action.id, state)),
  on(UserActions.deleteUserFailure, (state, action) => ({ ...state, error: action.error })),
  on(UserActions.loadUsers, (state, action) => adapter.setAll(action.users, state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
