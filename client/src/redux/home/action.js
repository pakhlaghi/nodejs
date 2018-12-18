import axios from "axios";
import { CHANGE_TITLE, GET_USERS_SUCCESS, SHOW_SPINNER } from "./types";

export const changeTitle = title => ({
  type: CHANGE_TITLE,
  payload: {
    title
  }
});

export const showSpinner = status => ({
  type: SHOW_SPINNER,
  payload: {
    status
  }
});

export const getUsersSuccess = data => ({
  type: GET_USERS_SUCCESS,
  payload: {
    data
  }
});

export const changeTitleAsync = title => {
  return dispatch => {
    dispatch(showSpinner(true));

    setTimeout(() => {
      dispatch(changeTitle(title));
      dispatch(showSpinner(false));
    }, 2500);
  };
};

export const getUsers = () => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        dispatch(getUsersSuccess(res.data));
      })
      .catch(err => {
        // dispatch(getUsersError(err.message))
      });
  };
};
