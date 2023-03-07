import { ActionTypes } from "../constants/action-types";

const initialState = {
    images : []
}

export const imageReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_IMAGES:
            return {...state, images:payload };
        case ActionTypes.SEARCH_IMAGES:
            return {...state, images:payload };
        case ActionTypes.DELETE_IMAGE:
            return {...state, images:payload };
        default:
            return state;
    }
}