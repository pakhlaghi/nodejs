import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { List, Collapse } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./listItems.style";
import { withStyles } from "@material-ui/core/styles";
import CCMaterialIcon from "./../../utility/ccMaterialIcon";
import { Link } from "react-router-dom";

const ListItems = props => {
  const { classes } = props;

  const items = [
    {
      text: "Dashboard",
      action: "main",
      icon: "DashboardIcon",
      children: []
    },
    {
      text: "Items",
      action: "items",
      icon: "MenuIcon",
      children: []
    },
    {
      text: "Pages",
      action: "pages",
      icon: "WebIcon",
      children: []
    },
    {
      text: "Media",
      action: "media",
      icon: "PhotoIcon",
      children: []
    },
    {
      text: "Setting",
      action: "setting",
      icon: "SettingsIcon",
      children: []
    }
  ];

  return (
    <List>
      {items.map(item => (
        <React.Fragment>
          <Link to={item.action} className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <CCMaterialIcon icon={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {item.children.length > 0 ? <ExpandMore /> : null}
            </ListItem>
          </Link>

          {item.children.length > 0 ? (
            <Collapse
              in={true}
              timeout="auto"
              timeout="auto"
              unmountOnExit
              className={classes.nested}
            >
              <List component="div">
                <ListItem button>
                  <ListItemIcon>
                    <CCMaterialIcon icon={item.children[0].icon} />
                  </ListItemIcon>
                  <ListItemText inset primary={item.children[0].text} />
                </ListItem>
              </List>
            </Collapse>
          ) : null}
        </React.Fragment>
      ))}
    </List>
  );
};

export default withStyles(styles)(ListItems);
