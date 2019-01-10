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

const NewPageModule = props => {
  const { classes, enqueueSnackbar } = props;

  const modules = [
    { id: 1, name: "Module1", order: 1 },
    { id: 2, name: "Module2", order: 2 },
    { id: 3, name: "Module3", order: 3 }
  ];

  const handleSaveClick = () => {
    enqueueSnackbar("Page saved Successfuly", { variant: "success" });
  };

  const handleAddTopClick = () => {
    console.log("add top");
  };

  const handleAddBottomClick = () => {
    console.log("add Bottom");
  };

  const handleVisibleClick = () => {
    console.log("visible");
  };

  const handleTrashClick = () => {
    console.log("Trash");
  };

  const handleSettingClick = () => {
    console.log("Setting");
  };

  const handleCancelClick = () => {
    // open = true;
    props.history.push("/dashboard/pages");
  };

  const handleClose = () => {
    open = false;
  };

  let open = false;

  return (
    <div>
      <div className={classes.topBar}>
        <FormControl required className={classes.inputMargin}>
          <InputLabel htmlFor="title">Page Title</InputLabel>
          <Input id="title" name="title" autoFocus />
        </FormControl>
        <FormControl required className={classes.inputMargin}>
          <InputLabel htmlFor="navigation">Unique Navigation Name</InputLabel>
          <Input id="navigation" name="navigation" />
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
        {modules.map(module => (
          <Draggable bounds="parent" axis="y" handle=".handle">
            <div className={classes.moduleContainer}>
              <span class="handle">
                <IconButton>
                  <ControlCameraIcon />
                </IconButton>
              </span>
              <IconButton onClick={handleAddBottomClick}>
                <LibraryAddIcon />
              </IconButton>
              <IconButton onClick={handleAddTopClick}>
                <LibraryAddIcon className={classes.rotate} />
              </IconButton>
              <IconButton onClick={handleVisibleClick}>
                <VisibilityIcon />
              </IconButton>
              <IconButton onClick={handleTrashClick}>
                <DeleteForeverIcon />
              </IconButton>
              <IconButton onClick={handleSettingClick}>
                <SettingsIcon />
              </IconButton>
              <Paper className={classes.module}>{module.name}</Paper>
            </div>
          </Draggable>
        ))}
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to cancel Page Edit?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By click Yes the unsaved data will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(withSnackbar(withRouter(NewPageModule)));
