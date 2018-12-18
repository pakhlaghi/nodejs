import React from "react";
// components
import Login from "../features/login";
// redux
import { signIn, isInProgress } from "../redux/login/action";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    loginSt: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (username, password) => dispatch(signIn(username, password)) // async
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
