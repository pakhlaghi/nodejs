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
  EDIT_MODULE
} from "./types";

export default (
  state = {
    showSpinner: false,
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
  const cloneModule = { ...selectedModule[0] };
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

  return { ...state, isAnyModuleMoving: false };
};

export const editModule = (state, action) => {
  console.log(action.payload.moduleId);
  return { ...state };
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

const arrayMove = (array, from, to) => {
  if (to === from) return array;

  var target = array[from];
  var increment = to < from ? -1 : 1;

  for (var k = from; k != to; k += increment) {
    array[k] = array[k + increment];
  }
  array[to] = target;
  return array;
};
