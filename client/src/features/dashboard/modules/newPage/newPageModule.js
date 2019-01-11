import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SettingsIcon from "@material-ui/icons/Settings";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import Draggable from "react-draggable";
import { withSnackbar } from "notistack";
import IconButton from "@material-ui/core/IconButton";
import styles from "./newPageModule.style";
import { withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import CCenterTitleText from "./../../../contentModules/cCenterTitleText";
import CImageText from "./../../../contentModules/cImageText";
import CImageTile from "./../../../contentModules/cImageTile";
import CIconTitleText from "./../../../contentModules/CIconTitleText";
import CHeader from "./../../../contentModules/header/cHeader";
import CFooter from "./../../../contentModules/cFooter";

const NewPageModule = props => {
  const { classes, enqueueSnackbar, newPageSt, newPageHandler } = props;

  const componentMap = {
    CCenterTitleText: CCenterTitleText,
    CImageText: CImageText,
    CImageTile: CImageTile,
    CIconTitleText: CIconTitleText,
    CHeader: CHeader,
    CFooter: CFooter
  };

  const handleSaveClick = () => {
    newPageHandler.savePageAsync(enqueueSnackbar);
  };

  const handleAddTopClick = index => _ => {
    console.log("add top");
    newPageHandler.addModuleTop(index);
  };

  const handleAddBottomClick = index => _ => {
    console.log("add Bottom");
    newPageHandler.addModuleBottom(index);
  };

  const handleVisibleClick = (index, status) => _ => {
    console.log("visible");
    newPageHandler.toggleVisibility(index, status);
  };

  const handleTrashClick = index => _ => {
    console.log("Trash");
    newPageHandler.moveToTrash(index);
  };

  const handleSettingClick = index => {
    console.log("Setting");
    newPageHandler.moduleSetting(index);
  };

  const handleCancelClick = () => {
    newPageHandler.toggleCancelModal(true);
  };

  const handleCancelModalCancel = () => {
    newPageHandler.toggleCancelModal(false);
  };

  const handleCancelModalYes = () => {
    newPageHandler.toggleCancelModal(false);
    props.history.push("/dashboard/pages");
  };

  return (
    <div>
      <div className={classes.topBar}>
        <FormControl required className={classes.inputMargin}>
          <InputLabel htmlFor="title">Page Title</InputLabel>
          <Input
            id="title"
            name="title"
            autoFocus
            value={newPageSt.page.title}
          />
        </FormControl>
        <FormControl required className={classes.inputMargin}>
          <InputLabel htmlFor="navigation">Unique Navigation Name</InputLabel>
          <Input
            id="navigation"
            name="navigation"
            value={newPageSt.page.action}
          />
        </FormControl>

        <div className={classes.rightEnd}>
          <Button
            onClick={handleCancelClick}
            variant="contained"
            color="default"
            className={classes.button}
          >
            Cancel
            <CancelIcon className={classes.rightIcon} />
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleSaveClick}
          >
            Save Page
            <SaveIcon className={classes.rightIcon} />
          </Button>
        </div>
      </div>
      <Paper className={classes.pageContainer}>
        {newPageSt.page.modules.map((module, index) => (
          <Draggable bounds="parent" axis="y" handle=".handle">
            <div className={classes.moduleContainer}>
              <span class="handle">
                <IconButton>
                  <ControlCameraIcon />
                </IconButton>
              </span>
              <IconButton onClick={handleAddBottomClick(index)}>
                <LibraryAddIcon />
              </IconButton>
              <IconButton onClick={handleAddTopClick(index)}>
                <LibraryAddIcon className={classes.rotate} />
              </IconButton>
              {module.visible ? (
                <IconButton onClick={handleVisibleClick(index, false)}>
                  <VisibilityIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleVisibleClick(index, true)}>
                  <VisibilityOffIcon />
                </IconButton>
              )}

              <IconButton onClick={handleTrashClick(index)}>
                <DeleteForeverIcon />
              </IconButton>
              <IconButton onClick={handleSettingClick}>
                <SettingsIcon />
              </IconButton>
              <Paper
                className={`${classes.module} ${
                  module.visible ? "" : classes.invisible
                }`}
              >
                {React.createElement(componentMap[module.type], {
                  contentData: module.contents
                })}
              </Paper>
            </div>
          </Draggable>
        ))}
      </Paper>
      <Dialog
        open={newPageSt.isCancelModalOpen}
        onClose={handleCancelModalCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you would like to cancel Page Edit?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By click Yes the unsaved data will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelModalCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCancelModalYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(withSnackbar(withRouter(NewPageModule)));
