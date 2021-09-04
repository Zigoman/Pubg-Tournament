import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UserState } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<UserState>(usersFeatureKey);
export const selectUser = createSelector(selectUserState, (selectedUser: UserState) => selectedUser.user);
export const selectUserChecked = createSelector(selectUserState, (selectedUser: UserState) => selectedUser.userChecked);
