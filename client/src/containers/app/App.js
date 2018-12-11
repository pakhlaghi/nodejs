import React from "react";
import { connect } from "react-redux";
import Loadable from "react-loadable";
// components
import Header from "../../features/header/header";
// route
import { withRouter } from "react-router-dom";
import CCRoutes from "../../utility/ccRoutes";

// loading componet
const Loading = () => <div>Loading</div>;

// provate componet
const Private = () => <div>Private Content</div>;

// lazy loading Home component
const HomeContainer = Loadable({
  loader: () => import("../home/HomeContainer"),
  loading: Loading
});

// lazy loading Dashboard component
const DashboardContainer = Loadable({
  loader: () => import("../DashboardContainer"),
  loading: Loading
});

// lazy loading Dashboard component
const LoginContainer = Loadable({
  loader: () => import("../LoginContainer"),
  loading: Loading
});

function App({ auth, classes }) {
  // routes array to create router
  const routes = [
    {
      path: "/home",
      exact: true,
      component: HomeContainer
    },
    {
      path: "/Login",
      exact: true,
      component: LoginContainer
    },
    {
      path: "/private",
      component: Private,
      isAllowed: auth.isAuthenticated,
      redirectTo: "/login",
      isPrivate: true
    },
    {
      path: "/cities",
      component: DashboardContainer
    }
  ];

  return (
    <div>
      <Header />
      <CCRoutes routes={routes} />
    </div>
  );
}

// redux map state
const mapStateToProps = state => {
  return {
    auth: state.app.auth
  };
};

export default withRouter(connect(mapStateToProps)(App));
