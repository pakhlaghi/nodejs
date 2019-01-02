import { TOGGLE_DRAWER } from "./type";

export const toggleDrawer = status => {
  return {
    type: TOGGLE_DRAWER,
    payload: {
      status
    }
  };
};
