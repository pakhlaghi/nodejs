import React from "react";
import Loadable from "react-loadable";
// components
import Layout from "../layout";
import Loading from "../loading";
import HomeContainer from "../home/homeContainer";
// route
import { withRouter } from "react-router-dom";
import CCRoutes from "../../utility/ccRoutes";

// lazy loading Dashboard component
const lazyDashboardContainer = Loadable({
  loader: () => import("../dashboard/dashboardContainer"),
  loading: Loading
});

// lazy loading Login componentF
const lazyLoginContainer = Loadable({
  loader: () => import("../login/loginContainer"),
  loading: Loading
});

function App(props) {
  // props
  const { layoutSt, loginSt, onToggleDrawer } = props;

  const isAuthenticated = !!loginSt.token;

  // routes array to create router
  const routes = [
    {
      path: "/",
      exact: true,
      component: HomeContainer
    },
    {
      path: "/page/:contentId",
      exact: true,
      component: HomeContainer
    },
    {
      path: "/login",
      exact: true,
      component: lazyLoginContainer
    },
    {
      path: "/dashboard/:module/:id?",
      exact: true,
      component: lazyDashboardContainer,
      auth: {
        isAllowed: isAuthenticated,
        redirectTo: "/login", // if private redirect to ...
        isPrivate: true // is private route?
      }
    }
  ];

  return (
    <Layout
      layoutSt={layoutSt}
      onToggleDrawer={onToggleDrawer}
    >
      <CCRoutes routes={routes} />
    </Layout>
  );
}

export default App;
