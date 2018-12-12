import React from "react";
import Login from "../features/login";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(Login);
