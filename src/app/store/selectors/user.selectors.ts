import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UserState, selectAll } from '../reducers/user.reducer';
export const selectUserState = createFeatureSelector<UserState>(usersFeatureKey);
export const selectedUserAdmin = createSelector(selectUserState, (state: UserState) =>
  state.user ? state.user.admin : false
);

// export const selectedProduct = createSelector(
//   selectProductState,
//   (state: ProductState) => state.selectedProduct
// );
