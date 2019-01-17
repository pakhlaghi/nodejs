import React from "react";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

import pagesModule from "./pagesModule";

import { linkToNewPage } from "../../../../../redux/dashboard/modules/pageModule/pages/action";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    pagesSt: state.dashboardPages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pagesHandler: {
      linkToNewPage: history => dispatch(linkToNewPage(history))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(withRouter(pagesModule)));
