import { TOGGLE_DRAWER, GET_CONTENT_SUCCESS } from "./type";

let contentData = null;
const pathParams = {
  login: {
    showHeader: true,
    showFooter: true
  }
};

export default (
  state = { isDrawerOpen: false, contentData, pathParams },
  action
) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return toggleDrawer(state, action);
    case GET_CONTENT_SUCCESS:
      return getContentSuccess(state, action);
  }
  return state;
};

const toggleDrawer = (state, action) => {
  return { ...state, isDrawerOpen: action.payload.status };
};

const getContentSuccess = (state, action) => {
   
  const pathParams = state.pathParams[action.payload.pathId];
  let contentData = {};
  const contentDataObj = JSON.parse(action.payload.contentData);
  if (pathParams && pathParams.showHeader) {
    contentData.headerContent = contentDataObj.headerContent;
  }
  if (pathParams && pathParams.showFooter) {
    contentData.footerContent = contentDataObj.footerContent;
  }

  return { ...state, contentData: contentData };
};
