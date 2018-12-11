import {CHANGE_TITLE, GET_USERS_SUCCESS, SHOW_SPINNER} from "./types";

export default (state = {name: 'peyman', users: [], showSpinner: false}, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return { ...state, name: action.payload.title}
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload.data}
        case SHOW_SPINNER:
            return {...state, showSpinner: action.payload.status}
    }
    return state;
}