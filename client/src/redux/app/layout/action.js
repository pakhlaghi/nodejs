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

    // dispatch(getContentSuccess(mockData));

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

const mockData = {
  headerContent: {
    title: "Code Core",
    menuItems: [
      { id: 1, to: "/home", title: "Home" },
      { id: 2, to: "/login", title: "Login" },
      { id: 3, to: "/dashboard", title: "Dashboard" }
    ],
    drawerPosition: "right"
  },
  footerContent: {
    text: "Code Core Co. © 2018. Privacy Policy | Terms Of Use",
    style: {
      color: "#fff",
      backgroundColor: "#263238"
    },
    socialData: [
      {
        id: 1,
        icon: "TabletMac",
        url: "http://www.google.com"
      },
      {
        id: 2,
        icon: "TabletMac",
        url: "http://www.google.com"
      },
      {
        id: 3,
        icon: "TabletMac",
        url: "http://www.google.com"
      }
    ]
  }
};
