import { TOGGLE_DRAWER, GET_CONTENT_SUCCESS } from "./type";

let contentData = {
  headerContent: {
    
    isFullHeader: true,
        color: "#ffffff",
        background: {
          image:
            "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg-1.jpg",
          height: "65px"
        },
        topBar: {
          title: "Code Core",
    menuItems: [],
    menuId: 0,
    drawerPosition: "right"
  }
  },
  footerContent: {
    text: "Code Core Co. © 2018. Privacy Policy",
    term: {
      text: "Terms Of Use",
      url: "#"
    },
    style: {
      color: "#fff",
      backgroundColor: "#263238"
    },
    socialData: []
  }
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
