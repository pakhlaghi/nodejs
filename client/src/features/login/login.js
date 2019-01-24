import React from "react";
// Route
import { Redirect } from "react-router-dom";
//UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./login.style";
import CCSnackbar from "../../utility/ccSnackbar";

const Login = props => {
  const { loginSt, classes, onSignIn, onToggleSnackbar } = props;

  let inputs = {
    email: "",
    password: ""
  };

  const handleSnackbarClick = () => {
    onToggleSnackbar(false, null, null);
  };

  const handleLoginClick = () => {
    // onSignIn("peyman.akhlaghi@gmail.Scom", "123456");
    onSignIn(inputs.email, inputs.password);
  };

  const handleInputChange = e => {
    inputs[e.target.name] = e.target.value;
  };

  if (loginSt.token) {
    return <Redirect to="/dashboard/main" />;
  }
  return (
    <div className={classes.main}>
      {loginSt.snackbar.isOpen && (
        <CCSnackbar
          variant={loginSt.snackbar.variant}
          message={loginSt.snackbar.message}
          onClose={handleSnackbarClick}
        />
      )}
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
          </FormControl>
          {/* 
          ToDo: add logics
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loginSt.isInProgress}
            onClick={handleLoginClick}
          >
            Sign in
          </Button>
        </div>
        <div>{loginSt.errorMessage}</div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Login);
