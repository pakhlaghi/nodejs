import React from "react";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

import newPageModule from "./newPageModule";

import {
  addModuleTop,
  addModuleBottom,
  toggleVisibility,
  moveToTrash,
  moduleSetting,
  toggleCancelModal,
  savePageAsync,
  toggleAddModulesModal
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
      addModuleTop: index => dispatch(addModuleTop(index)),
      addModuleBottom: index => dispatch(addModuleBottom(index)),
      toggleVisibility: (index, status) =>
        dispatch(toggleVisibility(index, status)),
      moveToTrash: index => dispatch(moveToTrash(index)),
      moduleSetting: index => dispatch(moduleSetting(index)),
      toggleCancelModal: (status, history) =>
        dispatch(toggleCancelModal(status, history)),
      toggleAddModulesModal: status => dispatch(toggleAddModulesModal(status)),
      savePageAsync: enqueueSnackbar => dispatch(savePageAsync(enqueueSnackbar))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(withRouter(newPageModule)));
