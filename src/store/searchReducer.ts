import { Action } from "./actions";

const initialState = {};

export const searchResultsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "CACHE_RESULTS": {
            return { ...state, [action.mappingKey]: action.payLoad }
        }
        default:
            return state;
    }
}
