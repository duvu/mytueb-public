import {XUser} from "../../models/x-user";

export interface State {
    error?: string;
    isLoading?: boolean;
    user?: XUser;
}

export const initialState: State =  {
    error: null,
    isLoading: false,
    user: null,
};
