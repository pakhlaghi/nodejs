import React from "react";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

import newPageModule from "./newPageModule";

import {
  addModuleTop,
  addModuleBottom,
  toggleModuleVisibility,
  moveToTrash,
  moduleSetting,
  toggleCancelModal,
  savePageAsync,
  toggleAddModulesModal,
  saveAddModulesModal,
  toggleModuleSelected,
  toggleSelectAllModules
} from "../../../../redux/dashboard/modules/newPage/action";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    newPageSt: state.dashboardNewPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newPageHandler: {
      addModuleTop: moduleId => dispatch(addModuleTop(moduleId)),
      addModuleBottom: moduleId => dispatch(addModuleBottom(moduleId)),
      toggleModuleVisibility: (moduleId, status) =>
        dispatch(toggleModuleVisibility(moduleId, status)),
      moveToTrash: moduleId => dispatch(moveToTrash(moduleId)),
      moduleSetting: moduleId => dispatch(moduleSetting(moduleId)),
      toggleCancelModal: (status, history) =>
        dispatch(toggleCancelModal(status, history)),
      toggleAddModulesModal: status => dispatch(toggleAddModulesModal(status)),
      saveAddModulesModal: _ => dispatch(saveAddModulesModal()),
      toggleModuleSelected: moduleId =>
        dispatch(toggleModuleSelected(moduleId)),
      toggleSelectAllModules: _ => dispatch(toggleSelectAllModules()),
      savePageAsync: enqueueSnackbar => dispatch(savePageAsync(enqueueSnackbar))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(withRouter(newPageModule)));
