import React from "react";
import { Link } from "react-router-dom";
//components
// UI
import styles from "./topBar.style";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CodeIcon from "@material-ui/icons/Code";
import {
  ButtonBase,
  withWidth,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const TopBar = ({ classes, width, status }) => {
  const contentData = {
    title: "Code Core",
    menus: [
      { id: 1, to: "/home", title: "Home" },
      { id: 2, to: "/login", title: "Login" },
      { id: 3, to: "/dashboard", title: "Dashboard" }
    ]
  };

  const isSmall = width.indexOf("s") >= 0;

  const toggleDrawer = (side, open) => () => {
    status = open;
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.flex}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <CodeIcon />
        </IconButton>

        <ButtonBase href="/">
          <Typography variant="h6" color="inherit">
            {contentData.title}
          </Typography>
        </ButtonBase>

        <div className={classes.menu}>
          {isSmall ? (
            <IconButton
              onClick={toggleDrawer("right", true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            contentData.menus.map(item => (
              <Link key={item.id} to={item.to} className={classes.link}>
                <Button color="inherit">{item.title}</Button>
              </Link>
            ))
          )}
        </div>

        <Drawer
          anchor="right"
          open={status}
          onClose={toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            {
              <List>
                {contentData.menus.map(item => (
                  <ListItem button key={item.id}>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            }
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default withWidth()(withStyles(styles)(TopBar));
