import {
  IN_PROGRESS,
  TOGGLE_SNACKBAR,
  SIGN_IN_SUCCESS,
  SIGN_OUT
} from "./types";

const resetSnackbar = {
  variant: "error",
  message: null,
  isOpen: false
};

export default (
  state = {
    isInProgress: false,
    token: null,
    snackbar: {
      variant: "error",
      message: "login info is not correct",
      isOpen: false
    }
  },
  action
) => {
  switch (action.type) {
    case IN_PROGRESS:
      return inProgress(state, action);
    case TOGGLE_SNACKBAR:
      return toggleSnackbar(state, action);
    case SIGN_IN_SUCCESS:
      return signInSuccesss(state, action);
    case SIGN_OUT:
      return signOut(state, action);
  }
  return state;
};

const inProgress = (state, action) => {
  return {
    ...state,
    isInProgress: action.payload.status,
    token: null,
    snackbar: resetSnackbar
  };
};

const toggleSnackbar = (state, action) => {
  return {
    ...state,
    snackbar: {
      isOpen: action.payload.isOpen,
      message: action.payload.message,
      variant: action.payload.variant
    },
    token: null,
    isInProgress: false
  };
};

const signInSuccesss = (state, action) => {
  return {
    ...state,
    token: action.payload.data.token,
    snackbar: resetSnackbar,
    isInProgress: false
  };
};

const signOut = (state, action) => {
  return {
    ...state,
    token: null,
    errorMessage: null,
    isInProgress: false
  };
};
