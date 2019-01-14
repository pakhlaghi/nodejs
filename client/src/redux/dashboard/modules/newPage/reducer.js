import {
  SHOW_SPINNER,
  ADD_MODULE_TOP,
  ADD_MODULE_BOTTOM,
  TOGGLE_VISIBILITY,
  MOVE_TO_TRASH,
  TOGGLE_CANCEL_MODAL,
  TOGGLE_ADD_MODULES_MODAL
} from "./types";

export default (
  state = {
    showSpinner: false,
    page: {
      title: "New Page",
      action: "newPage",
      modules: [
        {
          visible: true,
          type: "CCenterTitleText",
          contents: {
            title: "GET OUR APP AND TURN EVERY PHOTO",
            subTitle: "You Take Into a Masterpiece!",
            body: `Despite all the intuitiveness of interface and easy-to-understand UX
                    and UI, an application as complex as ours can get you bumping into
                    some roadblocks or asking some technical questions over time. We can
                    assure you, that while our Customer Support dept. will be ready to
                    help you 24/7, we have also placed all the most frequently asked
                    questions and issues on this page…`,
            readMore: {
              text: "Read More",
              url: "#"
            }
          }
        },
        {
          visible: true,
          type: "CCenterTitleText",
          contents: {
            title: "GET OUR APP AND TURN EVERY PHOTO",
            subTitle: "You Take Into a Masterpiece!",
            body: `Despite all the intuitiveness of interface and easy-to-understand UX
                    and UI, an application as complex as ours can get you bumping into
                    some roadblocks or asking some technical questions over time. We can
                    assure you, that while our Customer Support dept. will be ready to
                    help you 24/7, we have also placed all the most frequently asked
                    questions and issues on this page…`,
            readMore: {
              text: "Read More",
              url: "#"
            }
          }
        }
      ]
    },
    isCancelModalOpen: false,
    isAddModulesOpen: false
  },
  action
) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return showSpinner(state, action);
    case ADD_MODULE_TOP:
      return addModuleTop(state, action);
    case ADD_MODULE_BOTTOM:
      return addModuleBottom(state, action);
    case TOGGLE_VISIBILITY:
      return toggleVisibility(state, action);
    case MOVE_TO_TRASH:
      return moveToTrash(state, action);
    case TOGGLE_CANCEL_MODAL:
      return toggleCancelModal(state, action);
    case TOGGLE_ADD_MODULES_MODAL:
      return toggleAddModulesModal(state, action);
  }
  return state;
};

export const showSpinner = (state, action) => {
  return { ...state, showSpinner: action.payload.status };
};

const addModuleTop = (state, action) => {
  // const newM = {
  //   visible: true,
  //   type: "CCenterTitleText",
  //   contents: {
  //     title: "Test Test",
  //     subTitle: "You Take Into a Masterpiece!",
  //     body: `Despite all the intuitiveness of interface and easy-to-understand UX
  //           and UI, an application as complex as ours can get you bumping into
  //           some roadblocks or asking some technical questions over time. We can
  //           assure you, that while our Customer Support dept. will be ready to
  //           help you 24/7, we have also placed all the most frequently asked
  //           questions and issues on this page…`,
  //     readMore: {
  //       text: "Read More",
  //       url: "#"
  //     }
  //   }
  // };

  // state.page.modules.splice(action.payload.index, 0, newM);

  return {
    ...state,
    isAddModulesOpen: true
  };
};

const addModuleBottom = (state, action) => {
  // const newM = {
  //   visible: true,
  //   type: "CCenterTitleText",
  //   contents: {
  //     title: "Test Test",
  //     subTitle: "You Take Into a Masterpiece!",
  //     body: `Despite all the intuitiveness of interface and easy-to-understand UX
  //           and UI, an application as complex as ours can get you bumping into
  //           some roadblocks or asking some technical questions over time. We can
  //           assure you, that while our Customer Support dept. will be ready to
  //           help you 24/7, we have also placed all the most frequently asked
  //           questions and issues on this page…`,
  //     readMore: {
  //       text: "Read More",
  //       url: "#"
  //     }
  //   }
  // };

  // state.page.modules.splice(action.payload.index + 1, 0, newM);
  return {
    ...state,
    isAddModulesOpen: true
  };
};

const toggleVisibility = (state, action) => {
  state.page.modules = state.page.modules.map((module, index) => {
    if (index == action.payload.index) {
      module.visible = action.payload.status;
    }
    return module;
  });

  return {
    ...state
  };
};

const moveToTrash = (state, action) => {
  state.page.modules.splice(action.payload.index, 1);
  return {
    ...state
  };
};

const toggleCancelModal = (state, action) => {
  if (action.payload.history) {
    action.payload.history.push("/dashboard/pages");
  }

  return {
    ...state,
    isCancelModalOpen: action.payload.status
  };
};

const toggleAddModulesModal = (state, action) => {
  return {
    ...state,
    isAddModulesOpen: action.payload.status
  };
};
