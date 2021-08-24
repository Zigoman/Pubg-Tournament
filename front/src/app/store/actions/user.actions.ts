import { createAction, props } from '@ngrx/store';
import { IPlayer, IUser } from '../../shared/interfaces/store.interface';

export const loadPlayers = createAction('[NON] Load Players');
export const loadPlayersSuccess = createAction(
  '[Users List Effect] Load Users Success',
  props<{ players: IPlayer[] }>()
);
export const loadPlayersFailure = createAction('[Users List Effect] Load Users Failure', props<{ error: string }>());

export const addUser = createAction('[Login Component] Add User', props<{ user: IUser }>());
export const CheckLogin = createAction('[Login Component] Check User', props<{ token: string }>());
export const loadUser = createAction('[Login Component] load User', props<{ user: IUser }>());
export const loadUserSuccess = createAction('[User Effect] load User Success', props<{ user: IUser }>());
export const loadUserFailure = createAction('[User Effect] load User Failure', props<{ error: string }>());

export const deleteUser = createAction('[Admin Component] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[User Effect] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[User Effect] Delete User Failure', props<{ error: string }>());
