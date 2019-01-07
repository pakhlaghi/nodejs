import { IN_PROGRESS, SHOW_ERROR, SIGN_IN_SUCCESS } from "./types";
import { dataService } from "./../../service/dataService";

export const isInProgress = status => ({
  type: IN_PROGRESS,
  payload: {
    status
  }
});

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    data
  }
});

export const showError = (isError, errorMessage) => ({
  type: SHOW_ERROR,
  payload: {
    isError,
    errorMessage
  }
});

export const signOut = _ => ({
  type: SIGN_OUT,
  payload: {}
});

// ASYNC ACTIONS
export const signIn = (username, password) => {
  return dispatch => {
    // in progress
    dispatch(isInProgress(true));

    // call api
    const data = {
      username: username,
      password: password
    };

    dataService
      .login(data)
      .then(data => {
        if (data.token) {
          // toDo: add logic for keep me signin > if checkbox checked set local storage
          // sessionStorage.setItem("token", data.token);
          dispatch(signInSuccess(data));
        }
      })
      .catch(err => {
        // if (sessionStorage.getItem("token")) {
        //   sessionStorage.removeItem("token");
        // }
        dispatch(showError(true, "Error to get data"));
      });
  };
};
