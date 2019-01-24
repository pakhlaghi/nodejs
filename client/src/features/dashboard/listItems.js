import React from "react";
import { Link } from "react-router-dom";

// UI
import styles from "./listItems.style";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { List, Collapse } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";

// Utility
import CCMaterialIcon from "./../../utility/ccMaterialIcon";

const ListItems = props => {
  const { classes, items } = props;

  return (
    <List>
      {items &&
        items.map((item, index) => (
          <React.Fragment key={index}>
            <Link to={item.action} className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <CCMaterialIcon icon={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
                {item.children.length > 0 && <ExpandMore />}
              </ListItem>
            </Link>

            {item.children.length > 0 && (
              <Collapse
                in={true}
                timeout="auto"
                timeout="auto"
                unmountOnExit
                className={classes.nested}
              >
                <List component="div">
                  {item.children.map(child => (
                    <Link to={child.action} className={classes.link}>
                      <ListItem button>
                        <ListItemIcon>
                          <CCMaterialIcon icon={child.icon} />
                        </ListItemIcon>
                        <ListItemText inset primary={child.text} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
    </List>
  );
};

export default withStyles(styles)(ListItems);
