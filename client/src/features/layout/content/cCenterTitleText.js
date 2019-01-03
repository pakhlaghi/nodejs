import React from "react";
// UI
import styles from "./cCenterTitleText.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase } from "@material-ui/core";

const CCenterTitleText = ({ classes, contentData }) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWidth}>
        <Typography variant="title">{contentData.contents.title}</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {contentData.contents.subTitle}
        </Typography>
        <hr className={classes.hr} />
        <Typography variant="body1" gutterBottom>
          {contentData.contents.body}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <ButtonBase href={contentData.contents.readMore.url}>
            {contentData.contents.readMore.text}
          </ButtonBase>
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(CCenterTitleText);
