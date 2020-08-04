import { usersFeatureKey, UserState } from '../reducers/user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<UserState>(usersFeatureKey);
export const selectUser = createSelector(selectUserState, (selectedUser: UserState) => selectedUser.user);
