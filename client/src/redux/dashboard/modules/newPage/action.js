import {
  SHOW_SPINNER,
  ADD_MODULE_TOP,
  ADD_MODULE_BOTTOM,
  TOGGLE_VISIBILITY,
  MOVE_TO_TRASH,
  TOGGLE_CANCEL_MODAL
} from "./types";

export const showSpinner = status => ({
  type: SHOW_SPINNER,
  payload: {
    status
  }
});

export const addModuleTop = index => ({
  type: ADD_MODULE_TOP,
  payload: {
    index
  }
});

export const addModuleBottom = index => ({
  type: ADD_MODULE_BOTTOM,
  payload: {
    index
  }
});

export const toggleVisibility = (index, status) => ({
  type: TOGGLE_VISIBILITY,
  payload: {
    index,
    status
  }
});

export const moveToTrash = index => ({
  type: MOVE_TO_TRASH,
  payload: {
    index
  }
});

export const moduleSetting = () => {
  console.log("Setting");
};

export const toggleCancelModal = status => ({
  type: TOGGLE_CANCEL_MODAL,
  payload: { status }
});

// async:
// call this first => resolve will call action with type
// no type is required
export const savePageAsync = enqueueSnackbar => {
  return dispatch => {
    dispatch(showSpinner(true));
    enqueueSnackbar("Page saved Successfuly", { variant: "success" });
    // dataService
    //   .getHomeContent(id)
    //   .then(data => {
    //     dispatch(showSpinner(true));
    //     dispatch(getContentBodySuccess(data));
    //   })
    //   .catch(err => console.log(err));
  };
};
