import React from "react";
import Home from "../features/home/home";
import { changeTitleAsync, getUsers } from "../redux/home/action";

import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  return {
    home: state.home,
    match: props.match // match is react-route property
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAsync: title => dispatch(changeTitleAsync(title)),
    onGetUsersAsync: () => dispatch(getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
