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
  removeModule,
  moveModule,
  moveToModule,
  cancelEditing,
  applyChanges,
  initDataAsync
} from "../../../../../redux/dashboard/modules/pageModule/newPage/action";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    newPageSt: state.dashboardNewPage
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // init based on the url id param
  if (ownProps.match.params.id) {
    dispatch(initDataAsync(ownProps.match.params.id));
  }

  return {
    newPageHandler: {
      toggleModuleVisibility: (moduleId, status) =>
        dispatch(toggleModuleVisibility(moduleId, status)),
      moveToTrash: moduleId => dispatch(moveToTrash(moduleId)),
      editModule: moduleId => dispatch(editModule(moduleId)),
      toggleCancelModal: (status, history) =>
        dispatch(toggleCancelModal(status, history)),
      toggleAddModulesModal: status => dispatch(toggleAddModulesModal(status)),
      saveAddModulesModal: enqueueSnackbar =>
        dispatch(saveAddModulesModal(enqueueSnackbar)),
      savePageAsync: enqueueSnackbar =>
        dispatch(savePageAsync(enqueueSnackbar)),
      addModuleFromList: moduleId => dispatch(addModuleFromList(moduleId)),
      openAddModuleModalAsync: (moduleId, where) =>
        dispatch(openAddModuleModalAsync(moduleId, where)),
      removeModule: moduleId => dispatch(removeModule(moduleId)),
      moveModule: moduleId => dispatch(moveModule(moduleId)),
      moveToModule: (moduleId, enqueueSnackbar) =>
        dispatch(moveToModule(moduleId, enqueueSnackbar)),
      handleCancelEditing: _ => dispatch(cancelEditing()),
      handleApplyChanges: (inputs, moduleType) =>
        dispatch(applyChanges(inputs, moduleType))
    }
  };
};

// with router ro add router props into the component props. should be the before connect
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withSnackbar(newPageModule))
);
