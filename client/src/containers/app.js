import React from "react";
import { connect } from "react-redux";
import Loadable from "react-loadable";
// components
import Layout from "../features/layout/layout";
import Loading from "../features/loading";
import HomeContainer from "./homeContainer";
// route
import { withRouter } from "react-router-dom";
import CCRoutes from "../utility/ccRoutes";
// redux
import { toggleDrawer } from "../redux/app/layout/action";

// lazy loading Dashboard component
const lazyDashboardContainer = Loadable({
  loader: () => import("./dashboardContainer"),
  loading: Loading
});

// lazy loading Dashboard componentF
const lazyLoginContainer = Loadable({
  loader: () => import("./loginContainer"),
  loading: Loading
});

function App(props) {
  // props
  const { layoutSt, loginSt, pathname, onToggleDrawer } = props;

  const isAuthenticated = !!loginSt.token;

  // routes array to create router
  const routes = [
    {
      path: "/",
      exact: true,
      component: HomeContainer,
      extra: {
        isFullHeader: true
      }
    },
    {
      path: "/home",
      exact: true,
      component: HomeContainer,
      extra: {
        isFullHeader: true
      }
    },
    {
      path: "/Login",
      exact: true,
      component: lazyLoginContainer
    },
    {
      path: "/dashboard",
      component: lazyDashboardContainer,
      auth: {
        isAllowed: isAuthenticated,
        redirectTo: "/login", // if private redirect to ...
        isPrivate: true // is private route?
      },
      extra: {
        showHeader: false,
        showFooter: false
      }
    }
  ];

  return (
    <Layout
      pathname={pathname}
      layoutSt={layoutSt}
      onToggleDrawer={onToggleDrawer}
    >
      <CCRoutes routes={routes} />
    </Layout>
  );
}

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
