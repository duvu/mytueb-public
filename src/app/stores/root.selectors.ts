import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ROOT_FEATURE_KEY, RootState} from "./root.reducer";

const getRootState = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);
export const getAuthenticate = createSelector(
    getRootState,
    (state: RootState) => state.auth.authenticated
);

export const rootQuery = {
    getAuthenticate,
};
