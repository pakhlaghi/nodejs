import { IN_PROGRESS, SHOW_ERROR, SIGN_IN_SUCCESS, SIGN_OUT } from "./types";

export default (
  state = { isInProgress: false, errorMessage: null, token: null },
  action
) => {
  switch (action.type) {
    case IN_PROGRESS:
      return inProgress(state, action);
    case SHOW_ERROR:
      return showError(state, action);
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
    errorMessage: null
  };
};

const showError = (state, action) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    token: null,
    isInProgress: false
  };
};

const signInSuccesss = (state, action) => {
  return {
    ...state,
    token: action.payload.data.token,
    errorMessage: null,
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
