import {
  CLOSE_DRAWER,
  OPEN_DRAWER,
  GET_ITEMS_SUCCESS,
  SHOW_SPINNER
} from "./types";

import axios from "axios";

export const closeDrawer = () => ({
  type: CLOSE_DRAWER
});

export const openDrawer = () => ({
  type: OPEN_DRAWER
});

export const showSpinner = status => ({
  type: SHOW_SPINNER,
  payload: {
    status
  }
});

export const getItemsSuccess = data => ({
  type: GET_ITEMS_SUCCESS,
  payload: {
    data
  }
});

// async:
// call this first => resolve will call action with type
// no type is required
export const getItemsAsync = () => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        dispatch(getItemsSuccess(res.data));
      })
      .catch(err => {
        // dispatch(getUsersError(err.message))
      });
  };
};
