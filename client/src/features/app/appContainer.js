import React from "react";
import { connect } from "react-redux";
import App from "./app";

// route
import { withRouter } from "react-router-dom";
// redux
import { toggleDrawer, getContentAsync } from "../../redux/app/layout/action";

// redux map state
const mapStateToProps = (state, props) => {
  return {
    loginSt: state.login,
    layoutSt: state.app.layout,
    pathname: props.location.pathname
  };
};

// redux map actions
const mapDispatchToProps = dispatch => {
  // onInit: load data onInit
  dispatch(getContentAsync());

  return {
    onToggleDrawer: status => dispatch(toggleDrawer(status))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
