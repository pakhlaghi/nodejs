import React from "react";
import { SnackbarProvider } from "notistack";
import LoginSnackbar from "./loginSnackbar";

const Login = props => {
  return (
    <SnackbarProvider maxSnack={3}>
      <LoginSnackbar {...props} />
    </SnackbarProvider>
  );
};

export default Login;
