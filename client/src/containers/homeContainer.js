import React from "react";
import Home from "../features/home/home";
import { getContentBodyAsync } from "../redux/home/action";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    homeSt: state.home
  };
};

const mapDispatchToProps = (dispatch, props) => {
  // init with empty id
  dispatch(getContentBodyAsync(props.location.pathname));
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
