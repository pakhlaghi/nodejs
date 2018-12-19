import React from "react";
// UI
import styles from "./cImageTile.style";
import { withStyles } from "@material-ui/core/styles";

const CImageTile = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWidth} />
    </div>
  );
};

export default withStyles(styles)(CImageTile);
