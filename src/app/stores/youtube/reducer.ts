import {initialState, State} from "./state";
import {Action} from "@ngrx/store";
import {ActionTypes, XActions} from "./actions";

export const youtubeFeatureKey = "youtubeKey";

export function reducer(state = initialState, action: XActions): State {
    switch (action.type) {
        case ActionTypes.LOAD_VIDEOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
                videos: []
            };
        case ActionTypes.LOAD_VIDEO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                // @ts-ignore
                videos: action.payload.videos
            };
        case ActionTypes.LOAD_VIDEO_FAILURE:
            return {
                ...state,
                isLoading: false,
                // @ts-ignore
                error: action.payload.error
            };
        default:
            return state;
    }
}
