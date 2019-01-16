import React from "react";
import Dashboard from "./dashboard";
import {
  closeDrawer,
  openDrawer,
  getItemsAsync
} from "../../redux/dashboard/action";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dashboardSt: state.dashboard
  };
};

const mapDispatchToProps = dispatch => {
  // onInit: load data onInit
  dispatch(getItemsAsync());
  
  return {
    onCloseDrawer: _ => dispatch(closeDrawer()),
    onOpenDrawer: _ => dispatch(openDrawer())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
