import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

 const CCProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
    return (isAllowed ? <Route {...props}/> :  <Redirect to={redirectTo} />);
};

export default CCProtectedRoute;