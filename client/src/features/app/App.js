import React from "react";
import { connect } from "react-redux";
import Loadable from "react-loadable";

// UI
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// components

// route
import { Link, withRouter } from "react-router-dom";
import CCRoutes from "../../shared/ccRoutes";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  }
};

const Loading = () => <div>Loading</div>;

const Private = () => <div>Private Content</div>;

const mapStateToProps = state => {
  return {
    auth: state.app.auth
  };
};

// lazy loading Home component
const HomeContainer = Loadable({
  loader: () => import("../home/HomeContainer"),
  loading: Loading
});

// lazy loading Dashboard component
const DashboardContainer = Loadable({
  loader: () => import("../dashboard/DashboardContainer"),
  loading: Loading
});

// lazy loading Dashboard component
const LoginContainer = Loadable({
  loader: () => import("../login/LoginContainer"),
  loading: Loading
});

function App({ auth, classes }) {
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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Code Core
            </Typography>

            <Link to="/home" className={classes.link}>
              <Button color="inherit">Home</Button>
            </Link>

            <Link to="/private" className={classes.link}>
              <Button color="inherit">Private</Button>
            </Link>

            <Link to="/cities" className={classes.link}>
              <Button color="inherit">Cities</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <CCRoutes routes={routes} />
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(App)));
