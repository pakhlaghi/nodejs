import axios from "axios";
import { GET_CONTENT_BODY_SUCCESS, SHOW_SPINNER } from "./types";
import { config } from "./../../constant/config";

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
export const getContentBodyAsync = () => {
  return dispatch => {
    const query = `{
      contentById(id: "home")
    }
    `;

    dispatch(showSpinner(true));

    axios
      .post(config.api.gqUrl, {
        query: query
      })
      .then(res => {
        dispatch(getContentBodySuccess(JSON.parse(res.data.data.contentById)));
        dispatch(showSpinner(false));
      })
      .catch(err => {
        // toDo: show error message - snackbar
        // dispatch(getUsersError(err.message))
        dispatch(showSpinner(false));
      });
  };
};
