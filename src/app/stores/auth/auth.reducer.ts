import { Action, createReducer, on } from '@ngrx/store';
import {logInAuth, logOUtAuth} from "./auth.actions";
import {AuthState} from "./auth.state";


export const authFeatureKey = 'auth';

export const initialState: AuthState = {
    authenticated: false
};


export const reducer = createReducer(
  initialState,
    on(logInAuth, (state) => ({...state, authenticated: true})),
    on(logOUtAuth, (state) => ({...state, authenticated: false})),
);

