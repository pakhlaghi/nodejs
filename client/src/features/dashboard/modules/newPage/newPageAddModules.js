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
import { Checkbox } from "@material-ui/core";

const NewPageAddModules = props => {
  const { classes, isAddModulesOpen, toggleAddModulesModal, modules } = props;

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
    toggleAddModulesModal(false);
  };

  const handleVisibleClick = (index, status) => {
    console.log("dfd");
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
        {modules.map((module, index) => (
          <div key={index} className={classes.moduleContainer}>
            <div className={classes.inCheckbox}>
              <Checkbox />
            </div>
            <Button className={`${classes.selected} ${classes.fullWidth}`}>
              <Paper
                className={`${classes.fullWidth} ${classes.module} ${
                  module.visible ? "" : classes.invisible
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
        <Button onClick={handleAddModulesModalCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddModulesModalAdd} color="primary" autoFocus>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(NewPageAddModules);
