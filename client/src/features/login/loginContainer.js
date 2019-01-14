import React from "react";
// components
import Login from "./login";
// redux
import { signIn, toggleSnackbar } from "../../redux/login/action";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    loginSt: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (username, password) => dispatch(signIn(username, password)), // async
    onToggleSnackbar: (isOpen, variant, message) =>
      dispatch(toggleSnackbar(isOpen, variant, message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
