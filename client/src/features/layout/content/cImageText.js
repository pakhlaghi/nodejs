import React from "react";
// UI
import styles from "./cImageText.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase } from "@material-ui/core";
import classNames from "classnames";

const CImageText = ({ classes, contentData }) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWidth}>
        <div className={classNames(classes.box, classes.imageBox)}>
          <img
            className={classes.image}
            src={contentData.contents.image.url}
            alt={contentData.contents.image.title}
          />
        </div>
        <div className={classes.box}>
          <Typography variant="title" color="inherit">
            {contentData.contents.title}
          </Typography>
          <Typography variant="subtitle1" color="inherit" gutterBottom>
            {contentData.contents.subtitle}
          </Typography>
          <hr className={classes.hr} />
          <Typography variant="body1" color="inherit" gutterBottom>
            {contentData.contents.body}
          </Typography>
          <Typography variant="body1" gutterBottom color="inherit">
            <ButtonBase href={contentData.contents.readMore.url}>
              {contentData.contents.readMore.text}
            </ButtonBase>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(CImageText);
