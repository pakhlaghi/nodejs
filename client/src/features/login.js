import React from "react";
import { SnackbarProvider } from "notistack";
import LoginSnackbar from "./loginSnackbar";

const Login = props => {
  const { loginSt, onSignIn } = props;

  return (
    <SnackbarProvider maxSnack={3}>
      <LoginSnackbar loginSt={loginSt} onSignIn={onSignIn} />
    </SnackbarProvider>
  );
};

export default Login;
