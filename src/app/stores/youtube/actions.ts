import {Action} from "@ngrx/store";
import {MyTubeVideo} from "../../models/my-tube-video";
import {MyTubeCategory} from "../../models/my-tube-category";

export enum ActionTypes {
    LOAD_VIDEOS_REQUEST = '[Youtube] Load Videos Request',
    LOAD_VIDEO_FAILURE = '[Youtbe] Load Videos Failure',
    LOAD_VIDEO_SUCCESS = '[Youtube] Load Video Success',

    ADD_VIDEO_REQUEST = '[Youtube] Add Video Request',
    ADD_VIDEO_FAILURE = '[Youtube] Add Video Failure',
    ADD_VIDEO_SUCCESS = '[Youtube] Add Video Success',

    REMOVE_VIDEO_REQUEST = '[Youtube] Remove Video Request',
    REMOVE_VIDEO_FAILURE = '[Youtube] Remove Video Failure',
    REMOVE_VIDEO_SUCCESS = '[Youtube] Remove Video Success',

    ADD_CATEGORY_REQUEST = '[Youtute] Add Category Request',
    ADD_CATEGORY_FAILURE = '[Youtube] Add Category Failure',
    ADD_CATEGORY_SUCCESS = '[Youtube] Add Category Success'
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
    public payload: {videos: MyTubeVideo[]};
    constructor(payload: {videos: MyTubeVideo[]}) {
        this.payload = payload;
    }
}

export class AddVideoRequestAction implements Action {
    readonly type: string = ActionTypes.ADD_VIDEO_REQUEST;
    public payload: {video: MyTubeVideo};
    constructor(payload: {video: MyTubeVideo}) {
        this.payload = payload;
    }
}

export class AddVideoSuccessAction implements Action {
    readonly type: string = ActionTypes.ADD_VIDEO_SUCCESS;
}

export class AddVideoFailureAction implements Action {
    readonly type: string = ActionTypes.ADD_VIDEO_FAILURE;
}

export class RemoveVideoRequestAction implements Action {
    readonly type: string = ActionTypes.REMOVE_VIDEO_REQUEST;
    public payload: {key: string};
    constructor(payload: {key: string}) {
        this.payload = payload;
    }
}

export class AddCategoryRequestAction implements Action {
    readonly type: string = ActionTypes.ADD_CATEGORY_REQUEST;
    public payload: {category: MyTubeCategory};
    constructor(payload: {category: MyTubeCategory}) {
        this.payload = payload;
    }
}

export class AddCategoryFailureAction implements Action {
    readonly type: string = ActionTypes.ADD_VIDEO_FAILURE;
}

export class AddCategorySuccessAction implements Action {
    readonly type: string = ActionTypes.ADD_CATEGORY_SUCCESS;
}

export class RemoveVideoFailureAction implements Action {
    readonly type: string = ActionTypes.REMOVE_VIDEO_FAILURE;
}

export class RemoveVideoSuccessAction implements Action {
    readonly type: string = ActionTypes.REMOVE_VIDEO_SUCCESS;
}

export type XActions = LoadVideosRequestAction | LoadVideosSuccessAction | LoadVideoFailureAction |
    AddVideoRequestAction | AddVideoSuccessAction | AddVideoFailureAction |
    RemoveVideoRequestAction | RemoveVideoSuccessAction | RemoveVideoFailureAction |
    AddCategoryRequestAction | AddCategorySuccessAction | AddCategoryFailureAction;
