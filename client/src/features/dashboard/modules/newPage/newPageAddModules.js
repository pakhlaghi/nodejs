import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./newPageModule.style";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const NewPageAddModules = props => {
  const { classes, isAddModulesOpen, toggleAddModulesModal } = props;

  // add modules modal handler
  const handleAddModulesModalCancel = () => {
    toggleAddModulesModal(false);
  };

  const handleAddModulesModalAdd = () => {
    toggleAddModulesModal(false);
  };

  return (
    <Dialog
      open={isAddModulesOpen}
      onClose={handleAddModulesModalCancel}
      scroll="paper"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Add Modules"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
          sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla. Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
          bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper
          nulla non metus auctor fringilla. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur
          purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
          nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Donec sed odio dui. Donec ullamcorper nulla non metus auctor
          fringilla. Cras mattis consectetur purus sit amet fermentum. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
          bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper
          nulla non metus auctor fringilla. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </DialogContentText>
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
