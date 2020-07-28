import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UserState, selectAll } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<UserState>(usersFeatureKey);
export const selectUser = createSelector(selectUserState, (state: UserState) => !!state.user);

// export const selectedProduct = createSelector(
//   selectProductState,
//   (state: ProductState) => state.selectedProduct
// );
