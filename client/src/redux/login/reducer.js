import { SHOW_SPINNER } from "./types";

export default (state = { showSpinner: false }, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, showSpinner: action.payload.status };
  }
  return state;
};
