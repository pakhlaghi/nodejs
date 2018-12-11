import React from "react";
import { Route, Redirect } from "react-router-dom";

// create protected route
const CCProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default CCProtectedRoute;
