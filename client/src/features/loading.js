import React from "react";
// UI
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./loading.style";

const Loading = ({ classes }) => {
  return (
    <div className={classes.container}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

export default withStyles(styles)(Loading);
