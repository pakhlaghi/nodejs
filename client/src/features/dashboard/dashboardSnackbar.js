import React from "react";
import classNames from "classnames";
import styles from "./dashboardSnackbar.style";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { withSnackbar } from "notistack";
import ListItems from "./listItems";
import MainModule from "./modules/mainModule";

import Loadable from "react-loadable";
// components
import Loading from "./../../features/loading";

const DashboardSnackbar = props => {
  const {
    dashboardSt,
    classes,
    onCloseDrawer,
    onOpenDrawer,
    enqueueSnackbar,
    match
  } = props;

  // lazy loading Dashboard component
  const lazyMenuModule = Loadable({
    loader: () => import("./modules/menuModule"),
    loading: Loading
  });

  // lazy loading Dashboard component
  const lazyNewPageModule = Loadable({
    loader: () => import("./modules/newPageModule"),
    loading: Loading
  });

   // lazy loading Dashboard component
   const lazyMyPagesModule = Loadable({
    loader: () => import("./modules/myPagesModule"),
    loading: Loading
  });

  // lazy loading Dashboard component
  const lazyMediaModule = Loadable({
    loader: () => import("./modules/mediaModule"),
    loading: Loading
  });

  // lazy loading Dashboard component
  const lazySettingModule = Loadable({
    loader: () => import("./modules/settingModule"),
    loading: Loading
  });

  const componentMap = {
    main: MainModule,
    menu: lazyMenuModule,
    newPage: lazyNewPageModule,
    myPages: lazyMyPagesModule,
    media: lazyMediaModule,
    setting: lazySettingModule
  };

  const showSnackbar = variant => {
    enqueueSnackbar("I love snacks." + variant, { variant });
  };

  const handleBellClick = () => {
    showSnackbar("warning");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={classNames(
          classes.appBar,
          dashboardSt.isDrawerOpen && classes.appBarShift
        )}
      >
        <Toolbar
          disableGutters={!dashboardSt.isDrawerOpen}
          className={classes.toolbar}
        >
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={onOpenDrawer}
            className={classNames(
              classes.menuButton,
              dashboardSt.isDrawerOpen && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit" onClick={handleBellClick}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !dashboardSt.isDrawerOpen && classes.drawerPaperClose
          )
        }}
        open={dashboardSt.isDrawerOpen}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={onCloseDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItems />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {componentMap[match.params.module]
          ? React.createElement(componentMap[match.params.module])
          : null}
      </main>
    </div>
  );
};

export default withStyles(styles)(withSnackbar(DashboardSnackbar));
