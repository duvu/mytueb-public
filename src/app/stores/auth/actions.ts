import {Action} from '@ngrx/store';
import {XUser} from "../../models/x-user";

export enum ActionTypes {
    LOGIN_REQUEST = '[Authenticate] Log In Request',
    LOGIN_FAILURE = '[Authenticate] Log In Failure',
    LOGIN_SUCCESS = '[Authenticate] Log In Success',

    LOGOUT_REQUEST = '[Authenticate] Log Out Request',
    LOGOUT_SUCCESS = '[Authenticate] Log Out Success'
}

export class LogoutRequestAction implements Action {
    readonly type: string = ActionTypes.LOGOUT_REQUEST;
    constructor() {
    }
}

export class LogoutSuccessAction implements Action {
    readonly type: string = ActionTypes.LOGOUT_SUCCESS;
    constructor() {
    }
}


export class LoginRequestAction implements Action {
    readonly type: string = ActionTypes.LOGIN_REQUEST;
    constructor() {
    }
}

export class LoginFailureAction implements Action {
    readonly type: string = ActionTypes.LOGIN_FAILURE;
    public payload: { error: string };

    constructor(payload: {error: string}) {
        this.payload = payload;
    }
}

export class LoginSuccessAction {
    readonly type: string = ActionTypes.LOGIN_SUCCESS;
    public payload: { user: any };

    constructor(payload: {user: any}) {
        this.payload = payload;
    }
}

export type XActions =
    LoginRequestAction |
    LoginFailureAction |
    LoginSuccessAction |
    LogoutRequestAction |
    LogoutSuccessAction;
