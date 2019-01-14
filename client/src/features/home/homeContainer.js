import React from "react";
import Home from "./home";

// redux
import { connect } from "react-redux";
import { toggleDrawer } from "../../redux/app/layout/action";
import { getContentBodyAsync } from "../../redux/home/action";

const mapStateToProps = state => {
  return {
    homeSt: state.home,
    layoutSt: state.app.layout
  };
};

const mapDispatchToProps = (dispatch, props) => {
  // init with empty id
  dispatch(
    getContentBodyAsync(
      props.match.params && props.match.params.contentId
        ? props.match.params.contentId
        : ""
    )
  );

  return {
    onToggleDrawer: status => dispatch(toggleDrawer(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
