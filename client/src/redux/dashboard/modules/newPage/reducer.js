import {
  SHOW_SPINNER,
  ADD_MODULE_TOP,
  ADD_MODULE_BOTTOM,
  TOGGLE_MODULE_VISIBILITY,
  MOVE_TO_TRASH,
  TOGGLE_CANCEL_MODAL,
  TOGGLE_ADD_MODULES_MODAL,
  SAVE_ADD_MODULES_MODAL,
  ADD_MODULE_FROM_LIST
} from "./types";

export default (
  state = {
    showSpinner: false,
    page: {
      title: "New Page",
      action: "newPage",
      modules: [
        {
          id: 1,
          visible: true,
          name: "Text & Title",
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
          id: 2,
          visible: true,
          name: "Text & Title",
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
    isAddModulesOpen: false,
    selectedCount: 0,
    addInId: 0,
    modulesToAdd: [],
    defaultModules: [
      {
        id: 1,
        selected: false,
        visible: true,
        icon: "DashboardIcon",
        name: "Text & Title",
        type: "CCenterTitleText",
        contents: {
          title: "GET OUR APP AND TURN EVERY PHOTO 1",
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
        id: 2,
        selected: false,
        visible: true,
        icon: "DashboardIcon",
        name: "Text & Title",
        type: "CCenterTitleText",
        contents: {
          title: "GET OUR APP AND TURN EVERY PHOTO 2",
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
  action
) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return showSpinner(state, action);
    case ADD_MODULE_TOP:
      return addModuleTop(state, action);
    case ADD_MODULE_BOTTOM:
      return addModuleBottom(state, action);
    case TOGGLE_MODULE_VISIBILITY:
      return toggleModuleVisibility(state, action);
    case MOVE_TO_TRASH:
      return moveToTrash(state, action);
    case TOGGLE_CANCEL_MODAL:
      return toggleCancelModal(state, action);
    case TOGGLE_ADD_MODULES_MODAL:
      return toggleAddModulesModal(state, action);
    case SAVE_ADD_MODULES_MODAL:
      return saveAddModulesModal(state, action);
    case ADD_MODULE_FROM_LIST:
      return addModuleFromList(state, action);
  }
  return state;
};

export const showSpinner = (state, action) => {
  return { ...state, showSpinner: action.payload.status };
};

const addModuleTop = (state, action) => {
  return {
    ...state,
    isAddModulesOpen: true,
    addInId: -1 * action.payload.moduleId
  };
};

const addModuleBottom = (state, action) => {
  return {
    ...state,
    isAddModulesOpen: true,
    addInId: action.payload.moduleId
  };
};

const toggleModuleVisibility = (state, action) => {
  state.page.modules = state.page.modules.map(module => {
    if (module.id == action.payload.moduleId) {
      module.visible = action.payload.status;
    }
    return module;
  });

  return {
    ...state
  };
};

const moveToTrash = (state, action) => {
  state.page.modules = state.page.modules.filter(
    module => module.id !== action.payload.moduleId
  );
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
  if (!action.payload.status) {
    state.defaultModules = state.defaultModules.map(module => {
      module.selected = false;
      return module;
    });
  }
  return {
    ...state,
    isAddModulesOpen: action.payload.status,
    selectedCount: 0
  };
};

const saveAddModulesModal = (state, action) => {
  const maxId = state.page.modules
    .map(el => el.id)
    .reduce(maxCallback, -Infinity);

  let addIntoIndex = getModuleIdToIndex(state.page.modules, state.addInId);

  state.modulesToAdd.forEach((module, index) => {
    module.id = (maxId ? maxId : 0) + index + 1;
    state.page.modules.splice(addIntoIndex, 0, module);
    addIntoIndex++;
  });

  state.modulesToAdd = [];

  return {
    ...state,
    isAddModulesOpen: false,
    selectedCount: 0,
    addInId: 0
  };
};

export const addModuleFromList = (state, action) => {
  const selectedModule = state.defaultModules.filter(
    module => (module.id = action.payload.moduleId)
  );
  // push cloned obj {...
  state.modulesToAdd.push({ ...selectedModule[0] });
  return { ...state, selectedCount: state.selectedCount + 1 };
};
// ------------------------------------------------------------------------------

const maxCallback = (max, cur) => Math.max(max, cur);

const getModuleIdToIndex = (modules, id) => {
  let addIntoIndex = 0;

  modules.forEach((module, index) => {
    if (module.id === Math.abs(id)) {
      addIntoIndex = index;
      return;
    }
  });

  return id > 0 ? addIntoIndex + 1 : addIntoIndex;
};
