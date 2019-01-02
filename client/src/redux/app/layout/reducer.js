import { TOGGLE_DRAWER } from "./type";

// toDo: get from server
const contentData = {
  title: "Code Core",
  menuItems: [
    { id: 1, to: "/home", title: "Home" },
    { id: 2, to: "/login", title: "Login" },
    { id: 3, to: "/dashboard", title: "Dashboard" }
  ],
  drawerPosition: "right"
};

export default (
  state = { isDrawerOpen: false, contentData: contentData },
  action
) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return toggleDrawer(state, action);
  }
  return state;
};

const toggleDrawer = (state, action) => {
  return { ...state, isDrawerOpen: action.payload.status };
};
