import {Action} from "@ngrx/store";
import {MyTubeVideo} from "../../models/my-tube-video";

export enum ActionTypes {
    LOAD_VIDEOS_REQUEST = '[Youtube] Load Videos Request',
    LOAD_VIDEO_FAILURE = '[Youtbe] Load Videos Failure',
    LOAD_VIDEO_SUCCESS = '[Youtube] Load Video Success'
}
export class LoadVideosRequestAction implements Action{
    readonly type: string = ActionTypes.LOAD_VIDEOS_REQUEST;
    public payload: {uid: string | null};
    constructor(payload: {uid: string}) {
        this.payload = payload;
    }
}

export class LoadVideoFailureAction implements Action {
    readonly type: string = ActionTypes.LOAD_VIDEO_FAILURE;
    public payload: {error: string};
    constructor(payload: {error: string}) {
        this.payload = payload;
    }
}

export class LoadVideosSuccessAction implements Action {
    readonly type: string = ActionTypes.LOAD_VIDEO_SUCCESS;
    public payload: {videos: MyTubeVideo[]}
    constructor(payload: {videos: MyTubeVideo[]}) {
        this.payload = payload;
    }
}

export type XActions = LoadVideosRequestAction | LoadVideosSuccessAction | LoadVideoFailureAction;
