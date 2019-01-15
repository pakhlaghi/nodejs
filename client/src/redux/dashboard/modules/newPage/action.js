import {
  SHOW_SPINNER,
  ADD_MODULE_TOP,
  ADD_MODULE_BOTTOM,
  TOGGLE_MODULE_VISIBILITY,
  MOVE_TO_TRASH,
  TOGGLE_CANCEL_MODAL,
  TOGGLE_ADD_MODULES_MODAL,
  SAVE_ADD_MODULES_MODAL,
  TOGGLE_MODULE_SELECTED,
  TOGGLE_SELECT_ALL_MODULES
} from "./types";

export const showSpinner = status => ({
  type: SHOW_SPINNER,
  payload: {
    status
  }
});

export const addModuleTop = moduleId => ({
  type: ADD_MODULE_TOP,
  payload: {
    moduleId
  }
});

export const addModuleBottom = moduleId => ({
  type: ADD_MODULE_BOTTOM,
  payload: {
    moduleId
  }
});

export const toggleModuleVisibility = (moduleId, status) => ({
  type: TOGGLE_MODULE_VISIBILITY,
  payload: {
    moduleId,
    status
  }
});

export const moveToTrash = moduleId => ({
  type: MOVE_TO_TRASH,
  payload: {
    moduleId
  }
});

export const moduleSetting = () => {
  console.log("Setting");
};

export const toggleCancelModal = (status, history) => ({
  type: TOGGLE_CANCEL_MODAL,
  payload: { status, history }
});

export const toggleAddModulesModal = status => ({
  type: TOGGLE_ADD_MODULES_MODAL,
  payload: { status }
});

export const saveAddModulesModal = _ => ({
  type: SAVE_ADD_MODULES_MODAL,
  payload: {}
});

export const toggleModuleSelected = moduleId => ({
  type: TOGGLE_MODULE_SELECTED,
  payload: { moduleId }
});

export const toggleSelectAllModules = _ => ({
  type: TOGGLE_SELECT_ALL_MODULES,
  payload: {}
});

// async: ------------------------------------------------------------------------
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
