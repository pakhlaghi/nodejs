import React from "react";
import newPageModule from "./newPageModule";

import {
  addModuleTop,
  addModuleBottom,
  toggleVisibility,
  moveToTrash,
  moduleSetting,
  toggleCancelModal,
  savePageAsync
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
      toggleCancelModal: status => dispatch(toggleCancelModal(status)),
      savePageAsync: enqueueSnackbar => dispatch(savePageAsync(enqueueSnackbar))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newPageModule);
