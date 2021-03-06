import { GET_CONTENT_BODY_SUCCESS, SHOW_SPINNER } from "./types";

const contentData = [];

export default (
  state = {
    showSpinner: false,
    contentData: contentData
  },
  action
) => {
  switch (action.type) {
    case GET_CONTENT_BODY_SUCCESS:
      return { ...state, contentData: JSON.parse(action.payload.data.modules) };
    case SHOW_SPINNER:
      return { ...state, showSpinner: action.payload.status };
  }
  return state;
};
