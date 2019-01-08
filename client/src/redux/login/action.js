import { IN_PROGRESS, TOGGLE_SNACKBAR, SIGN_IN_SUCCESS } from "./types";
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

export const signOut = _ => ({
  type: SIGN_OUT,
  payload: {}
});

export const toggleSnackbar = (isOpen, variant, message) => ({
  type: TOGGLE_SNACKBAR,
  payload: {
    isOpen,
    variant,
    message
  }
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
        dispatch(toggleSnackbar(true, "error", "Error to get data"));
      });
  };
};
