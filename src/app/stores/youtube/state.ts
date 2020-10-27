import {MyTubeVideo} from "../../models/my-tube-video";

export interface State {
    isLoading?: boolean;
    error?: string;
    videos?: MyTubeVideo[];
}

export const initialState: State = {
    isLoading: false,
    error: null,
    videos: null
};
