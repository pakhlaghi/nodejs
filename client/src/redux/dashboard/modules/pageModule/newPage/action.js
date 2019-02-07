import {
  SHOW_SPINNER,
  ADD_MODULE_TOP,
  ADD_MODULE_BOTTOM,
  TOGGLE_MODULE_VISIBILITY,
  MOVE_TO_TRASH,
  TOGGLE_CANCEL_MODAL,
  TOGGLE_ADD_MODULES_MODAL,
  SAVE_ADD_MODULES_MODAL,
  ADD_MODULE_FROM_LIST,
  GET_DEFAULT_MODULES_SUCCESS,
  REMOVE_MODULE,
  EDIT_MODULE,
  MOVE_MODULE,
  MOVE_TO_MODULE,
  CANCEL_EDITING,
  APPLY_CHANGES,
  INIT_DATA
} from "./types";
import { dataService } from "../../../../../service/dataService";

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

export const editModule = moduleId => ({
  type: EDIT_MODULE,
  payload: {
    moduleId
  }
});

export const toggleCancelModal = (status, history) => ({
  type: TOGGLE_CANCEL_MODAL,
  payload: { status, history }
});

export const toggleAddModulesModal = status => ({
  type: TOGGLE_ADD_MODULES_MODAL,
  payload: { status }
});

export const saveAddModulesModal = enqueueSnackbar => ({
  type: SAVE_ADD_MODULES_MODAL,
  payload: { enqueueSnackbar }
});

export const addModuleFromList = moduleId => ({
  type: ADD_MODULE_FROM_LIST,
  payload: {
    moduleId
  }
});

export const getDefaultModulesSuccess = data => ({
  type: GET_DEFAULT_MODULES_SUCCESS,
  payload: {
    data
  }
});

export const removeModule = moduleId => ({
  type: REMOVE_MODULE,
  payload: {
    moduleId
  }
});

export const moveModule = moduleId => ({
  type: MOVE_MODULE,
  payload: {
    moduleId
  }
});

export const moveToModule = (moduleId, enqueueSnackbar) => ({
  type: MOVE_TO_MODULE,
  payload: {
    moduleId,
    enqueueSnackbar
  }
});

export const cancelEditing = _ => ({
  type: CANCEL_EDITING,
  payload: {}
});

export const applyChanges = (inputs, moduleType) => ({
  type: APPLY_CHANGES,
  payload: { inputs, moduleType }
});

export const initData = data => ({
  type: INIT_DATA,
  payload: { data }
});

// async: ------------------------------------------------------------------------
// 1- call this first => resolve will call action with type
// 2- no type is required

// just one dispatch in init to avoid infinit loop: each dispatch cuase trigger mapDispatchToProps
export const initDataAsync = id => {
  return dispatch => {
    dataService
      .getPageModules(id)
      .then(data => {
        dispatch(initData(data));
      })
      .catch(err => console.log(err));
  };
};

export const openAddModuleModalAsync = (moduleId, where) => {
  return (dispatch, getState) => {
    // just call server once to init data
    if (
      getState().dashboardNewPage &&
      getState().dashboardNewPage.defaultModules == null
    ) {
      dispatch(showSpinner(true));

      dataService
        .getDefaultModules()
        .then(data => {
          dispatch(showSpinner(false));
          dispatch(getDefaultModulesSuccess(data));
        })
        .catch(err => console.log(err));
    }

    dispatch(
      where === "top" ? addModuleTop(moduleId) : addModuleBottom(moduleId)
    );
  };
};

export const savePageAsync = enqueueSnackbar => {
  return (dispatch, getState) => {
    dispatch(showSpinner(true));
    // enqueueSnackbar("Page saved Successfuly", { variant: "success" });
    dataService
      .savePage(getState().dashboardNewPage.page)
      .then(data => {
        enqueueSnackbar("Page saved Successfuly", { variant: "success" });
        dispatch(showSpinner(false));
      })
      .catch(err => console.log(err));
  };
};
