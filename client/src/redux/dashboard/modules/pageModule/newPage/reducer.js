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
  APPLY_CHANGES,
  INIT_DATA,
  SAVE_PAGE,
  UPDATE_HEADER_INPUTS
} from "./types";

export default (
  state = {
    showSpinner: true,
    editModuleId: null,
    isAnyModuleMoving: false,
    page: {
      id: 0,
      title: "",
      action: "",
      modules: []
    },
    form: {
      summary: [],
      title: {
        label: "Page Title",
        isError: false,
        validation: {
          isRequired: { message: "Please fill $label" }
        }
      },
      action: {
        label: "Unique Navigation Name",
        isError: false,
        validation: {
          isRequired: { message: "Please fill $label" }
        }
      }
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
    case INIT_DATA:
      return initData(state, action);
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
    case SAVE_PAGE:
      return savePage(state, action);
    case UPDATE_HEADER_INPUTS:
      return updateHeaderInputs(state, action);
  }
  return state;
};

export const initData = (state, action) => {
  state.page = action.payload.data;
  state.page.modules = JSON.parse(state.page.modules);
  return { ...state, showSpinner: false };
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
    state.page = {
      id: 0,
      title: "",
      action: "",
      modules: []
    };
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

export const savePage = (state, action) => {
  state.page.id = action.payload.id;
  return { ...state, showSpinner: false };
};

export const updateHeaderInputs = (state, action) => {
  // validation
  // TODO: add validation service
  state.form[action.payload.id].isError = !isValid(
    state.form,
    action.payload.id,
    action.payload.value
  );
  state.page[action.payload.id] = action.payload.value;
  return { ...state };
};

// ------------------------------------------------------------------------------

const isValid = (form, id, value) => {
  const input = form[id];

  const validationProps = input.validation;

  for (const key in validationProps) {
    switch (key) {
      case "isRequired":
        if (validationProps[key] && value.trim() != "") {
          form.summary = form.summary.filter(
            item =>
              item.id != id &&
              item.message !== validationProps.isRequired.message
          );
          return true;
        } else {
          form.summary = form.summary.filter(
            item =>
              item.id != id &&
              item.message !== validationProps.isRequired.message
          );
          form.summary.push({
            id: id,
            message: validationProps.isRequired.message
          });
          return false;
        }

      case "isEmail":
        break;
      case "isPassword":
        break;
      case "isNumber":
        break;
      case "regex":
        break;
      default:
        break;
    }
  }
};

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
    case "cImageText":
      return mapInputsTitleText(module, inputs, moduleType);
    case "cImageTile":
      return mapInputsImageTile(module, inputs, moduleType);
    case "cIconTitleText":
      return mapInputsIconTitleText(module, inputs, moduleType);
    case "cFooter":
      return mapInputsFooter(module, inputs, moduleType);
    case "cHeader":
      return mapInputsHeader(module, inputs, moduleType);
    default:
      return;
  }
};

const mapInputsTitleText = (module, inputs, moduleType) => {
  module.contents.color = inputs.containerColor;
  module.contents.background = inputs.containerBackground;

  if (moduleType === "cImageText") {
    module.contents.image.position = inputs.imagePosition;
    module.contents.image.width = inputs.imageWidth;
    module.contents.image.isVisible = inputs.imageSwitch;
    module.contents.image.align = inputs.imageAlign;
    module.contents.image.title = inputs.imageTitle;
    module.contents.image.url = inputs.imageUrl;
  }

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

const mapInputsImageTile = (module, inputs) => {
  module.contents.tiles = inputs.tiles.map(tile => {
    return {
      title: tile.imageTitle,
      subTitle: tile.imageSubTitle,
      details: tile.imageDetails,
      imageUrl: tile.imageUrl,
      linkUrl: tile.imageLinkUrl,
      textColor: tile.imageTextColor
    };
  });

  module.contents.columnNumber = inputs.columnNumber;
  module.contents.containerColor = inputs.containerColor;

  return module;
};

const mapInputsIconTitleText = (module, inputs) => {
  module.contents.tiles = inputs.tiles.map(tile => {
    return {
      title: tile.title,
      text: tile.text,
      url: tile.url,
      icon: tile.icon,
      color: tile.color,
      align: tile.align
    };
  });

  module.contents.columnNumber = inputs.columnNumber;
  module.contents.containerColor = inputs.containerColor;
  module.contents.backgroundColor = inputs.backgroundColor;

  return module;
};

const mapInputsFooter = (module, inputs) => {
  module.contents.socialData = inputs.socialData.map(item => {
    return {
      title: item.title,
      url: item.url,
      icon: item.icon
    };
  });

  module.contents.style = {
    color: inputs.styleColor,
    backgroundColor: inputs.styleBackgroundColor
  };
  module.contents.text = inputs.text;
  module.contents.term.text = inputs.termText;
  module.contents.term.url = inputs.termUrl;

  return module;
};

const mapInputsHeader = (module, inputs) => {
  module.contents.isFullHeader = inputs.isFullHeader;
  module.contents.color = inputs.color;
  module.contents.background.image = inputs.backgroundImage;
  module.contents.background.height = inputs.backgroundHeight;

  module.contents.title = inputs.contentTitle;
  module.contents.subTitle = inputs.contentSubTitle;
  module.contents.topBar.title = inputs.topBarTitle;
  module.contents.topBar.menuId = inputs.topBarMenuId;

  module.contents.buttons.primary.text = inputs.buttonPrimaryText;
  module.contents.buttons.primary.url = inputs.buttonPrimaryUrl;
  module.contents.buttons.secondary.text = inputs.buttonSecText;
  module.contents.buttons.secondary.url = inputs.buttonSecUrl;

  return module;
};

const cloneDeep = obj => {
  // return { ...selectedModule[0] }; // shallow
  return JSON.parse(JSON.stringify(obj));
};
