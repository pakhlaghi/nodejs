import React from "react";
import Home from "../features/home/home";
import { getContentBodyAsync } from "../redux/home/action";

import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  return {
    homeSt: state.home,
    match: props.match // match is react-route property
  };
};

const mapDispatchToProps = dispatch => {
  dispatch(getContentBodyAsync());
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
