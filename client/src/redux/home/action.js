import { GET_CONTENT_BODY_SUCCESS, SHOW_SPINNER } from "./types";
import { dataService } from "../../service/dataService";

export const showSpinner = status => ({
  type: SHOW_SPINNER,
  payload: {
    status
  }
});

export const getContentBodySuccess = data => ({
  type: GET_CONTENT_BODY_SUCCESS,
  payload: {
    data
  }
});

// async:
// call this first => resolve will call action with type
// no type is required
export const getContentBodyAsync = path => {
  const id = path.replace("/", "");

  return dispatch => {
    dispatch(showSpinner(true));
    dataService
      .getHomeContent(id)
      .then(data => {
        dispatch(showSpinner(true));
        dispatch(getContentBodySuccess(data));
      })
      .catch(err => console.log(err));
  };
};
