import React from "react";
// UI
import styles from "./cImageText.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const CImageText = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWidth}>
        <div className={classes.box}>
          <img
            src="https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg5.png"
            alt=""
          />
        </div>
        <div className={classes.box}>
          <Typography variant="title" color="inherit">
            EDIT PHOTOS on the Go!
          </Typography>
          <Typography variant="subtitle1" color="inherit" gutterBottom>
            Our app has the most essential editing features, allowing you to
            enhance all the pictures you’ve taken on the go!
          </Typography>
          <hr className={classes.hr} />
          <Typography variant="body1" color="inherit" gutterBottom>
            As a team of professional photographers who were all young enough to
            remember working with the Photoshop V 1.0, we were always on the
            verge of cutting-edge photos post-processing technologies.
          </Typography>
          <a>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(CImageText);
