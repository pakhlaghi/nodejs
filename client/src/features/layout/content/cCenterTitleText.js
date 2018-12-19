import React from "react";
// UI
import styles from "./cCenterTitleText.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const CCenterTitleText = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWidth}>
        <Typography variant="title">
          GET OUR APP AND TURN EVERY PHOTO
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          You Take Into a Masterpiece!
        </Typography>
        <hr className={classes.hr} />
        <Typography variant="body1" gutterBottom>
          Despite all the intuitiveness of interface and easy-to-understand UX
          and UI, an application as complex as ours can get you bumping into
          some roadblocks or asking some technical questions over time. We can
          assure you, that while our Customer Support dept. will be ready to
          help you 24/7, we have also placed all the most frequently asked
          questions and issues on this page…
        </Typography>
        <a>Read more</a>
      </div>
    </div>
  );
};

export default withStyles(styles)(CCenterTitleText);
