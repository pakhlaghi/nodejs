import React from "react";

// UI
import classNames from "classNames";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./newPageAddModules.style";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Badge from "@material-ui/core/Badge";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton
} from "@material-ui/core";

// content modules
import CTitleText from "../../../../contentModules/cTitleText";
import CImageText from "./../../../../contentModules/cImageText";
import CImageTile from "./../../../../contentModules/cImageTile";
import CIconTitleText from "./../../../../contentModules/CIconTitleText";
import CHeader from "./../../../../contentModules/header/cHeader";
import CFooter from "./../../../../contentModules/cFooter";

//Utility
import CCMaterialIcon from "./../../../../../utility/ccMaterialIcon";

const NewPageAddModules = props => {
  const {
    classes,
    isAddModulesOpen,
    selectedCount,
    toggleAddModulesModal,
    saveAddModulesModal,
    addModuleFromList,
    modulesToAdd,
    removeModule,
    defaultModules,
    enqueueSnackbar
  } = props;

  const componentMap = {
    CTitleText: CTitleText,
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
    saveAddModulesModal(enqueueSnackbar);
  };

  const handleAddModuleFromListClick = moduleId => () => {
    addModuleFromList(moduleId);
  };

  const handleRemoveClick = moduleId => () => {
    removeModule(moduleId);
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
      classes={{ paper: classes.fullHeight }}
    >
      <DialogTitle id="alert-dialog-title">{"Add Modules"}</DialogTitle>

      <DialogContent className={classes.fullHeight}>
        <Grid container className={classes.fullHeight}>
          <Grid item sm={2} className={classes.topZIndex}>
            <List component="nav">
              {defaultModules &&
                defaultModules.map(module => (
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
          <Grid item sm={10}>
            {modulesToAdd && modulesToAdd.length > 0 ? (
              modulesToAdd.map(module => (
                <div key={module.id}>
                  <IconButton
                    onClick={handleRemoveClick(module.id)}
                    className={classes.deleteIcon}
                    color="secondary"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                  <Paper
                    className={`${classes.position} ${classes.fullWidth} ${
                      classes.module
                    } ${classes.overlayer}`}
                  >
                    {React.createElement(componentMap[module.type], {
                      contentData: module.contents
                    })}
                  </Paper>
                </div>
              ))
            ) : (
              <Paper
                className={classNames(
                  classes.emptyContainer,
                  classes.fullHeight
                )}
              >
                <Typography>Please add modules from the list</Typography>
              </Paper>
            )}
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
