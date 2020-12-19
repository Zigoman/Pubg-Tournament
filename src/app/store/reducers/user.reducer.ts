import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { IUser } from '../../shared/interfaces/store.interface';

export const usersFeatureKey = 'users';

export interface UserState {
  // additional entities state properties
  error: string | null;
  user: IUser | null;
}

// export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: UserState = {
  // additional entity state properties
  error: null,
  user: null
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUserSuccess, (state, action) => ({ ...state, user: action.user }))
);
