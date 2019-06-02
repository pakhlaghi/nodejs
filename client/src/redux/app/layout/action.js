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

export const getContentSuccess = (contentData, pathId) => {
  return {
    type: GET_CONTENT_SUCCESS,
    payload: {
      contentData,
      pathId
    }
  };
};

// async:
// call this first => resolve will call action with type
// no type is required
export const getContentAsync = (path) => {
  const pathId = path.replace("/", "");
  return (dispatch, getState) => {
    if(getState().app.layout.pathParams[pathId]){
      dataService
      .getLayoutContent()
      .then(data => {
        dispatch(getContentSuccess(data, pathId));
      })
      .catch(err => {
        // TODO: show error message - snackbar
        // dispatch(getUsersError(err.message))
      });
    }
    
  };
};
