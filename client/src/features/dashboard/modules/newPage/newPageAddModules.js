import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./newPageModule.style";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// content modules
import CCenterTitleText from "./../../../contentModules/cCenterTitleText";
import CImageText from "./../../../contentModules/cImageText";
import CImageTile from "./../../../contentModules/cImageTile";
import CIconTitleText from "./../../../contentModules/CIconTitleText";
import CHeader from "./../../../contentModules/header/cHeader";
import CFooter from "./../../../contentModules/cFooter";
import { Checkbox, FormControlLabel, Badge } from "@material-ui/core";

const NewPageAddModules = props => {
  const {
    classes,
    isAddModulesOpen,
    selectedCount,
    toggleAddModulesModal,
    saveAddModulesModal,
    toggleModuleSelected,
    toggleSelectAllModules,
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

  const handleModuleClick = moduleId => _ => {
    toggleModuleSelected(moduleId);
  };

  const handleCheckboxClick = moduleId => _ => {
    toggleModuleSelected(moduleId);
  };

  const handleToggleSelectAllModulesClick = () => {
    toggleSelectAllModules();
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
        {defaultModules.map(module => (
          <div key={module.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={module.selected}
                  onClick={handleCheckboxClick(module.id)}
                />
              }
              label={module.name}
            />
            <Button
              className={`${module.selected ? classes.selected : ""} ${
                classes.fullWidth
              }`}
              onClick={handleModuleClick(module.id)}
            >
              <Paper
                className={`${classes.fullWidth} ${classes.module} ${
                  classes.overlayer
                }`}
              >
                {React.createElement(componentMap[module.type], {
                  contentData: module.contents
                })}
              </Paper>
            </Button>
          </div>
        ))}
      </DialogContent>

      <DialogActions>
        <FormControlLabel
          className={classes.leftDialogAction}
          control={
            <Checkbox
              checked={selectedCount == defaultModules.length}
              onClick={handleToggleSelectAllModulesClick}
              indeterminate={
                selectedCount && selectedCount < defaultModules.length
              }
            />
          }
          label={`${
            selectedCount >= 0 && selectedCount < defaultModules.length
              ? "Select"
              : "Unselect"
          }  All`}
        />
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
