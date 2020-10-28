import {State} from "./state";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authFeatureKey} from "./reducer";
import {XUser} from "../../models/x-user";

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getUser = (state: State): XUser => state.user;

export const selectAuthState = createFeatureSelector(authFeatureKey);
export const selectAuthError = createSelector(selectAuthState, getError);
export const selectAuthLoading = createSelector(selectAuthState, getIsLoading);
export const selectAuthUser = createSelector(selectAuthState, getUser);

export const selectAuthStateModel = createSelector(
    selectAuthUser,
    selectAuthLoading,
    selectAuthError,
    (user: XUser, isLoading: boolean, error: string) => ({
        user,
        isLoading,
        error
    })
);
