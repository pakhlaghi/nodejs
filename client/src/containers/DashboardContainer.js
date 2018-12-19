import React from "react";
import Dashboard from "../features/dashboard";
import {
  closeDrawer,
  openDrawer,
  getItemsAsync
} from "../redux/dashboard/action";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dashboardSt: state.dashboard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseDrawer: _ => dispatch(closeDrawer()),
    onOpenDrawer: _ => dispatch(openDrawer()),
    onGetItemsAsync: _ => dispatch(getItemsAsync())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
