import { TOGGLE_DRAWER, GET_CONTENT_SUCCESS } from "./type";

// toDo: get from server
let contentData = {
  title: "Code Core",
  menuItems: [],
  drawerPosition: "right"
};

export default (
  state = { isDrawerOpen: false, contentData: contentData },
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
  return { ...state, contentData: action.payload.contentData };
};
