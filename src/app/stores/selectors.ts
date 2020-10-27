import {createFeatureSelector, createSelector} from "@ngrx/store";
import { State} from "./state";

const getRootState = createFeatureSelector<State>("ROOT_FEATURE_KEY");
export const getAuthenticate = createSelector(
    getRootState,
    (state: State) => state.auth.authenticated
);

export const rootQuery = {
    getAuthenticate,
};
