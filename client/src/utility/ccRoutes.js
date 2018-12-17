import React from "react";
import { Route, Switch } from "react-router-dom";
// Utility
import CCProtectedRoute from "./ccProtectedRoute";

// create router based on routes (protected, normal)
const CCRoutes = ({ routes }) => (
  <Switch>
    {routes.map(route =>
      route.auth && route.auth.isPrivate ? (
        <CCProtectedRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
          redirectTo={route.auth.redirectTo}
          isAllowed={route.auth.isAllowed}
        />
      ) : (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      )
    )}
  </Switch>
);

export default CCRoutes;
