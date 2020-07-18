import { createAction, props } from '@ngrx/store';
import { IUser } from '../../shared/interfaces/store.interface';

export const Login = createAction('[Login Page] Login', props<{ payload: IUser }>());
export const LoginSuccess = createAction('[Login Page] Login Success', props<{ payload: IUser }>());
export const LoginError = createAction('[Error] Error Occurred', props<{ errorMessage: string }>());

export const SignUp = createAction('[Login Page] SignUp', props<{ payload: IUser }>());
export const SignUpSuccess = createAction('[Login Page] SignUp Success', props<{ payload: IUser }>());
export const SignUpError = createAction('[Login Page] SignUp Error', props<{ errorMessage: string }>());
