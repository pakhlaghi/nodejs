import { TOGGLE_DRAWER, GET_CONTENT_SUCCESS } from "./type";
import { config } from "./../../../constant/config";

import axios from "axios";

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
export const getContentAsync = () => {
  return dispatch => {
    const query = `{
      content {
        headerContent {
          title
          menuItems {
            id
            to
            title
          }
          drawerPosition
        }
        footerContent {
          text
          style {
            color
            backgroundColor
          }
          socialData {
            id
            icon
            url
          }
        }
      }
    }`;

    axios
      .post(config.api.gqUrl, {
        query: query
      })
      .then(res => {
        dispatch(getContentSuccess(res.data.data.content));
      })
      .catch(err => {
        // toDo: show error message - snackbar
        // dispatch(getUsersError(err.message))
      });
  };
};
