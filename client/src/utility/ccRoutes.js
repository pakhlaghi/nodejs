import React from "react";
import { Route, Switch } from "react-router-dom";
// Component
import CCProtectedRoute from "./ccProtectedRoute";

// create router based on routes (protected, normal)
const CCRoutes = ({ routes }) => (
  <Switch>
    {routes.map(route =>
      route.isPrivate ? (
        <CCProtectedRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
          redirectTo={route.redirectTo}
          isAllowed={route.isAllowed}
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
