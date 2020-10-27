import {State} from "./state";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {youtubeFeatureKey} from "./reducer";
import {MyTubeVideo} from "../../models/my-tube-video";

const getError = (state: State) => state.error;
const getIsLoading = (state: State) => state.isLoading;
const getVideos = (state: State) => state.videos;

export const selectYoutubeState = createFeatureSelector(youtubeFeatureKey);
export const selectYoutubeError = createSelector(selectYoutubeState, getError);
export const selectYoutubeLoading = createSelector(selectYoutubeState, getIsLoading);
export const selectYoutubeVideos = createSelector(selectYoutubeState, getVideos);

export const selectYoutubeStateModel = createSelector(
    selectYoutubeVideos,
    selectYoutubeLoading,
    selectYoutubeError,
    (videos: MyTubeVideo[], isLoading: boolean, error: string) => ({
        videos, isLoading, error
    })
);
