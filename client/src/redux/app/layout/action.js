import { TOGGLE_DRAWER, GET_CONTENT_SUCCESS } from "./type";
import { dataService } from "./../../../service/dataService";

// BL
export const toggleDrawer = status => {
  return {
    type: TOGGLE_DRAWER,
    payload: {
      status
    }
  };
};

export const getContentSuccess = contentData => {
  return {
    type: GET_CONTENT_SUCCESS,
    payload: {
      contentData
    }
  };
};

// async:
// call this first => resolve will call action with type
// no type is required
export const getContentAsync = (path) => {
  const id = path.replace("/", "");
  // TODO: REMOVE PATH PARAMS and use getState for initialization
  return (dispatch, getState) => {
    if(getState().app.layout.pathParams[id]){
      dataService
      .getLayoutContent()
      .then(data => {
        dispatch(getContentSuccess(data));
      })
      .catch(err => {
        // toDo: show error message - snackbar
        // dispatch(getUsersError(err.message))
      });
    }
    
  };
};
