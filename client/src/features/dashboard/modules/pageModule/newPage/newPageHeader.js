import React from "react";
// UI
import styles from "./newPageHeader.style";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const NewPageHeader = props => {
  const {
    classes,
    enqueueSnackbar,
    history,
    title,
    action,
    isCancelModalOpen,
    toggleCancelModal,
    savePageAsync
  } = props;

  // header handler
  const handleCancelClick = () => {
    toggleCancelModal(true);
  };

  const handleSaveClick = () => {
    savePageAsync(enqueueSnackbar);
  };

  // cancel modal handler
  const handleCancelModalCancel = () => {
    toggleCancelModal(false);
  };

  const handleCancelModalYes = () => {
    toggleCancelModal(false, history);
  };

  return (
    <React.Fragment>
      <div className={classes.topBar}>
        <FormControl required className={classes.inputMargin}>
          <InputLabel htmlFor="title">Page Title</InputLabel>
          <Input id="title" name="title" autoFocus value={title} />
        </FormControl>
        <FormControl required className={classes.inputMargin}>
          <InputLabel htmlFor="navigation">Unique Navigation Name</InputLabel>
          <Input id="navigation" name="navigation" value={action} />
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

      <Dialog
        open={isCancelModalOpen}
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
    </React.Fragment>
  );
};

export default withStyles(styles)(NewPageHeader);
