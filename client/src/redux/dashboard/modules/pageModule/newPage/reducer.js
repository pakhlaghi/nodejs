import {
  SHOW_SPINNER,
  ADD_MODULE_TOP,
  ADD_MODULE_BOTTOM,
  TOGGLE_MODULE_VISIBILITY,
  MOVE_TO_TRASH,
  TOGGLE_CANCEL_MODAL,
  TOGGLE_ADD_MODULES_MODAL,
  SAVE_ADD_MODULES_MODAL,
  ADD_MODULE_FROM_LIST,
  GET_DEFAULT_MODULES_SUCCESS,
  REMOVE_MODULE,
  MOVE_MODULE,
  MOVE_TO_MODULE,
  EDIT_MODULE,
  CANCEL_EDITING,
  APPLY_CHANGES
} from "./types";

export default (
  state = {
    showSpinner: false,
    editModuleId: null,
    isAnyModuleMoving: false,
    page: {
      title: "New Page",
      action: "newPage",
      modules: []
    },
    isCancelModalOpen: false,
    isAddModulesOpen: false,
    selectedCount: 0,
    addInId: 0,
    modulesToAdd: [],
    defaultModules: null
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
    case GET_DEFAULT_MODULES_SUCCESS:
      return getDefaultModulesSuccess(state, action);
    case REMOVE_MODULE:
      return removeModule(state, action);
    case MOVE_MODULE:
      return moveModule(state, action);
    case MOVE_TO_MODULE:
      return moveToModule(state, action);
    case EDIT_MODULE:
      return editModule(state, action);
    case CANCEL_EDITING:
      return cancelEditing(state, action);
    case APPLY_CHANGES:
      return applyChanges(state, action);
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
  return {
    ...state,
    isAddModulesOpen: action.payload.status,
    selectedCount: 0,
    modulesToAdd: []
  };
};

const saveAddModulesModal = (state, action) => {
  const maxId = state.page.modules.map(el => el.id).reduce(maxCallback, 0);

  let addIntoIndex = getModuleIndexFromId(state.page.modules, state.addInId);
  // negative add top, positive add bottom
  addIntoIndex = state.addInId > 0 ? addIntoIndex + 1 : addIntoIndex;
  state.modulesToAdd.forEach((module, index) => {
    module.id = (maxId ? maxId : 0) + index + 1;
    state.page.modules.splice(addIntoIndex, 0, module);
    addIntoIndex++;
  });

  state.modulesToAdd = [];

  action.payload.enqueueSnackbar(state.selectedCount + " module/s added", {
    variant: "success"
  });

  return {
    ...state,
    isAddModulesOpen: false,
    selectedCount: 0,
    addInId: 0
  };
};

export const addModuleFromList = (state, action) => {
  const selectedModule = state.defaultModules.filter(
    module => module.id == action.payload.moduleId
  );

  const maxId =
    state.modulesToAdd.length !== 0
      ? state.modulesToAdd.map(el => el.id).reduce(maxCallback, 0)
      : 0;
  const cloneModule = cloneDeep(selectedModule[0]);
  cloneModule.id = maxId + 1;

  // push cloned obj {...
  state.modulesToAdd.push(cloneModule);
  return { ...state, selectedCount: state.selectedCount + 1 };
};

export const getDefaultModulesSuccess = (state, action) => {
  return { ...state, defaultModules: action.payload.data };
};

export const removeModule = (state, action) => {
  state.modulesToAdd = state.modulesToAdd.filter(
    module => module.id !== action.payload.moduleId
  );
  return { ...state, selectedCount: state.selectedCount - 1 };
};

export const moveModule = (state, action) => {
  let isAnyModuleMoving = false;
  state.page.modules = state.page.modules.map(module => {
    if (module.id == action.payload.moduleId) {
      module.isMoving = module.isMoving ? !module.isMoving : true;
      isAnyModuleMoving = module.isMoving;
    } else {
      module.isMoving = false;
    }
    return module;
  });
  return { ...state, isAnyModuleMoving: isAnyModuleMoving };
};

export const moveToModule = (state, action) => {
  // find movingModuleIndex and set isMoving to false
  let fromIndex = 0;
  state.page.modules = state.page.modules.map((module, index) => {
    if (module.isMoving) {
      fromIndex = index;
    }
    module.isMoving = false;
    return module;
  });

  let toIndex = getModuleIndexFromId(
    state.page.modules,
    action.payload.moduleId
  );
  // negative add top, positive add bottom
  if (toIndex == 0) {
    toIndex = action.payload.moduleId > 0 ? 1 : 0;
  } else {
    toIndex = action.payload.moduleId > 0 ? toIndex : toIndex - 1;
  }

  arrayMove(state.page.modules, fromIndex, toIndex);

  action.payload.enqueueSnackbar("Module Moved Successfuly", {
    variant: "success"
  });
  return { ...state, isAnyModuleMoving: false };
};

export const editModule = (state, action) => {
  state.page.modules = state.page.modules.map(module => {
    module.contents.isEditing = module.id == action.payload.moduleId;
    return module;
  });

  return { ...state, editModuleId: action.payload.moduleId };
};

export const cancelEditing = (state, action) => {
  state.page.modules = state.page.modules.map(module => {
    module.contents.isEditing = false;
    return module;
  });

  return { ...state, editModuleId: null };
};

export const applyChanges = (state, action) => {
  state.page.modules = state.page.modules.map(module => {
    if (module.id == state.editModuleId) {
      module = mapInputToState(
        action.payload.moduleType,
        module,
        action.payload.inputs
      );
    }
    module.contents.isEditing = false;
    return module;
  });

  return { ...state, editModuleId: null };
};

// ------------------------------------------------------------------------------

const maxCallback = (max, cur) => Math.max(max, cur);

const getModuleIndexFromId = (modules, id) => {
  let addIntoIndex = 0;

  modules.forEach((module, index) => {
    if (module.id === Math.abs(id)) {
      addIntoIndex = index;
      return;
    }
  });

  return addIntoIndex;
};

const arrayMove = (arr, from, to) => {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
};

const mapInputToState = (moduleType, module, inputs) => {
  switch (moduleType) {
    case "cTitleText":
      return mapInputsTitleText(module, inputs);
    default:
      return;
  }
};

const mapInputsTitleText = (module, inputs) => {
  module.contents.color = inputs.containerColor;
  module.contents.background = inputs.containerBackground;

  module.contents.title.text = inputs.titleText;
  module.contents.title.color = inputs.titleColor;
  module.contents.title.isVisible = inputs.titleSwitch;
  module.contents.title.align = inputs.titleAlign;

  module.contents.subTitle.text = inputs.subTitleText;
  module.contents.subTitle.color = inputs.subTitleColor;
  module.contents.subTitle.isVisible = inputs.subTitleSwitch;
  module.contents.subTitle.align = inputs.subTitleAlign;

  module.contents.line.width = inputs.lineWidth;
  module.contents.line.color = inputs.lineColor;
  module.contents.line.isVisible = inputs.lineSwitch;
  module.contents.line.align = inputs.lineAlign;

  module.contents.body.text = inputs.bodyText;
  module.contents.body.color = inputs.bodyColor;
  module.contents.body.isVisible = inputs.bodySwitch;
  module.contents.body.align = inputs.bodyAlign;

  module.contents.readMore.text = inputs.readMoreText;
  module.contents.readMore.url = inputs.readMoreUrl;
  module.contents.readMore.color = inputs.readMoreColor;
  module.contents.readMore.isVisible = inputs.readMoreSwitch;
  module.contents.readMore.align = inputs.readMoreAlign;

  return module;
};

const cloneDeep = obj => {
  // return { ...selectedModule[0] }; // shallow
  return JSON.parse(JSON.stringify(obj));
};
