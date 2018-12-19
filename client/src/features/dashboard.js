import React from "react";
import classNames from "classnames";
import styles from "./dashboard.style";
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

const Dashboard = props => {
  const {
    dashboardSt,
    classes,
    onCloseDrawer,
    onOpenDrawer,
    onGetItemsAsync,
    loginSt
  } = props;

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
          <IconButton color="inherit">
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
        <List />
        <Divider />
        <List />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Typography variant="h4" gutterBottom component="h2">
          Orders
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          SimpleLineChart
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
          Products
        </Typography>
        <div className={classes.tableContainer}>SimpleTable</div>
      </main>
    </div>
  );
};

export default withStyles(styles)(Dashboard);
