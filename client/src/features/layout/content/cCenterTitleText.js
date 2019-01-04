import React from "react";
// UI
import styles from "./cCenterTitleText.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase } from "@material-ui/core";

const CCenterTitleText = ({ classes, contentData }) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWidth}>
        <Typography variant="title">{contentData.title}</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {contentData.subTitle}
        </Typography>
        <hr className={classes.hr} />
        <Typography variant="body1" gutterBottom>
          {contentData.body}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <ButtonBase href={contentData.readMore.url}>
            {contentData.readMore.text}
          </ButtonBase>
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(CCenterTitleText);
