import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  GET_ITEMS_SUCCESS,
  SHOW_SPINNER
} from "./types";

export default (
  state = { isDrawerOpen: true, items: [], showSpinner: false },
  action
) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isDrawerOpen: true };
    case CLOSE_DRAWER:
      return { ...state, isDrawerOpen: false };
    case GET_ITEMS_SUCCESS:
      return { ...state, items: action.payload.data };
    case SHOW_SPINNER:
      return { ...state, showSpinner: action.payload.status };
  }
  return state;
};
