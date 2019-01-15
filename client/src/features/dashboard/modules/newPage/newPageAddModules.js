import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./newPageModule.style";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Badge from "@material-ui/core/Badge";

// content modules
import CCenterTitleText from "./../../../contentModules/cCenterTitleText";
import CImageText from "./../../../contentModules/cImageText";
import CImageTile from "./../../../contentModules/cImageTile";
import CIconTitleText from "./../../../contentModules/CIconTitleText";
import CHeader from "./../../../contentModules/header/cHeader";
import CFooter from "./../../../contentModules/cFooter";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";

//Utility
import CCMaterialIcon from "./../../../../utility/ccMaterialIcon";

const NewPageAddModules = props => {
  const {
    classes,
    isAddModulesOpen,
    selectedCount,
    toggleAddModulesModal,
    saveAddModulesModal,
    addModuleFromList,
    modulesToAdd,
    defaultModules
  } = props;

  const componentMap = {
    CCenterTitleText: CCenterTitleText,
    CImageText: CImageText,
    CImageTile: CImageTile,
    CIconTitleText: CIconTitleText,
    CHeader: CHeader,
    CFooter: CFooter
  };

  // add modules modal handler
  const handleAddModulesModalCancel = () => {
    toggleAddModulesModal(false);
  };

  const handleAddModulesModalAdd = () => {
    saveAddModulesModal(false);
  };

  const handleAddModuleFromListClick = moduleId => () => {
    addModuleFromList(moduleId);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="xl"
      open={isAddModulesOpen}
      onClose={handleAddModulesModalCancel}
      scroll="paper"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Add Modules"}</DialogTitle>

      <DialogContent>
        <Grid container>
          <Grid item sm="2" className={classes.topZIndex}>
            <List component="nav">
              {defaultModules.map(module => (
                <React.Fragment key={module.id}>
                  <ListItem
                    button
                    onClick={handleAddModuleFromListClick(module.id)}
                  >
                    <ListItemIcon>
                      <CCMaterialIcon icon={module.icon} />
                    </ListItemIcon>
                    <ListItemText primary={module.name} />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid item sm="10">
            {modulesToAdd &&
              modulesToAdd.map(module => (
                <div key={module.id}>
                  <Paper
                    className={`${classes.marginBottom} ${classes.fullWidth} ${
                      classes.module
                    } ${classes.overlayer}`}
                  >
                    {React.createElement(componentMap[module.type], {
                      contentData: module.contents
                    })}
                  </Paper>
                </div>
              ))}
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions className={classes.topZIndex}>
        <Button onClick={handleAddModulesModalCancel} color="primary">
          Cancel
        </Button>
        <Badge
          color="primary"
          badgeContent={selectedCount}
          classes={{ badge: classes.badge }}
          invisible={!selectedCount}
        >
          <Button onClick={handleAddModulesModalAdd} color="primary" autoFocus>
            Add
          </Button>
        </Badge>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(NewPageAddModules);
