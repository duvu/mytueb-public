import {initialState, State} from "./state";
import {XActions, ActionTypes} from "./actions";

export const authFeatureKey = 'auth';

export function reducer(state = initialState, action: XActions): State {
    switch (action.type) {
        case ActionTypes.LOAD_USER_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true,
                user: null
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true,
                user: null
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                user: null
            };
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                // @ts-ignore
                error: action.payload.error,
                isLoading: false
            };
        case ActionTypes.LOGIN_SUCCESS:
            console.log('Login Success');
            return {
                ...state,
                error: null,
                isLoading: false,
                // @ts-ignore
                user: action.payload.user
            };
        default:
            return state;
    }
}
