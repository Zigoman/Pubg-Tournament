import { Action, createReducer, on } from '@ngrx/store';
import { ISquad, IUser } from '../../shared/interfaces/store.interface';
import { Login, LoginError, LoginSuccess, SignUp, SignUpError, SignUpSuccess } from '../actions/app.actions';

export interface State {
  user: IUser | null;
  SquadList: ISquad[];
}

const initialState = {
  user: null,
  SquadList: []
};

const reducer = createReducer(
  initialState,
  on(Login, (state: State) => state),
  on(LoginSuccess, (state: State, { payload }) => ({ ...state, ...payload })),
  on(LoginError, (state: State, {}) => state),
  on(SignUp, (state: State, { payload }) => ({ ...state, ...payload })),
  on(SignUpSuccess, (state: State, { payload }) => ({ ...state, ...payload })),
  on(SignUpError, (state: State, {}) => state)
);

export function appReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
