import React from "react";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

import newPageModule from "./newPageModule";

import {
  toggleModuleVisibility,
  moveToTrash,
  editModule,
  toggleCancelModal,
  savePageAsync,
  toggleAddModulesModal,
  saveAddModulesModal,
  addModuleFromList,
  openAddModuleModalAsync,
  removeModule
} from "../../../../../redux/dashboard/modules/pageModule/newPage/action";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    newPageSt: state.dashboardNewPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newPageHandler: {
      toggleModuleVisibility: (moduleId, status) =>
        dispatch(toggleModuleVisibility(moduleId, status)),
      moveToTrash: moduleId => dispatch(moveToTrash(moduleId)),
      editModule: moduleId => dispatch(editModule(moduleId)),
      toggleCancelModal: (status, history) =>
        dispatch(toggleCancelModal(status, history)),
      toggleAddModulesModal: status => dispatch(toggleAddModulesModal(status)),
      saveAddModulesModal: _ => dispatch(saveAddModulesModal()),
      savePageAsync: enqueueSnackbar =>
        dispatch(savePageAsync(enqueueSnackbar)),
      addModuleFromList: moduleId => dispatch(addModuleFromList(moduleId)),
      openAddModuleModalAsync: (moduleId, where) =>
        dispatch(openAddModuleModalAsync(moduleId, where)),
      removeModule: moduleId => dispatch(removeModule(moduleId))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(withRouter(newPageModule)));
