import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {initialState as authInitialState, reducer as authReducer} from "./auth/auth.reducer";
import {AuthState} from "./auth";

export const ROOT_FEATURE_KEY = "MY_TUBE_FAVORITE";

export interface RootState {
    auth: AuthState;
}

export interface RootPartialState {
    readonly [ROOT_FEATURE_KEY]: RootState;
}

export const initialState: RootState = {
    auth: authInitialState
}
export const reducers: ActionReducerMap<RootState> = {
    auth: authReducer
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
