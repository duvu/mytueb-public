import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
    AuthLogIn = '[Authenticate] Log In Authenticates',
    AuthLogOut = '[Authenticate] Log Out Authenticates'
}

export const logInAuth = createAction(
  AuthActionTypes.AuthLogIn
);

export const logOUtAuth = createAction(
    AuthActionTypes.AuthLogOut
);
