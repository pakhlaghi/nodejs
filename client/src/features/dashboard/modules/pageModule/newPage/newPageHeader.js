import React from "react";
// UI
import styles from "./newPageHeader.style";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

const NewPageHeader = props => {
  // from props
  const {
    classes,
    title,
    action,
    form,
    enqueueSnackbar,
    history,
    isCancelModalOpen,
    toggleCancelModal,
    savePageAsync,
    updateHeaderInputs
  } = props;

  // header handler
  const handleCancelClick = () => {
    toggleCancelModal(true);
  };

  const handleSaveClick = () => {
    savePageAsync(title, action, enqueueSnackbar);
  };

  // cancel modal handler
  const handleCancelModalCancel = () => {
    toggleCancelModal(false);
  };

  const handleCancelModalYes = () => {
    toggleCancelModal(false, history);
  };

  const handleInputChange = e => {
    updateHeaderInputs(e.target.id, e.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.topBar}>
        <TextField
          error={form.title.isError}
          required
          id="title"
          label={form.title.label}
          value={title.value}
          className={classes.inputMargin}
          onChange={handleInputChange}
        />

        <TextField
          error={form.action.isError}
          required
          id="action"
          label={form.action.label}
          value={action}
          className={classes.inputMargin}
          onChange={handleInputChange}
        />

        <div className={classes.rightEnd}>
          <Button
            onClick={handleCancelClick}
            variant="contained"
            color="default"
            className={classes.button}
          >
            Close
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
