import { createAction, props } from '@ngrx/store';
import { IUser } from '../../shared/interfaces/store.interface';

export const loadUsers = createAction('[NON] Load Users', props<{ users: IUser[] }>());
export const loadUsersSuccess = createAction('[Users List Effect] Load Users Success', props<{ products: IUser[] }>());
export const loadUsersFailure = createAction('[Users List Effect] Load Users Failure', props<{ error: string }>());

export const addUser = createAction('[Login Component] Add User', props<{ user: IUser }>());
export const addUserSuccess = createAction('[User Effect] Add User Success', props<{ user: IUser }>());
export const addUserFailure = createAction('[User Effect] Add User Failure', props<{ error: string }>());

export const deleteUser = createAction('[Admin Component] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[User Effect] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[User Effect] Delete User Failure', props<{ error: string }>());

// export const clearUsers = createAction('[User/API] Clear Users');
