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
            src={contentData.image.url}
            alt={contentData.image.title}
          />
        </div>
        <div className={classes.box}>
          <Typography variant="title" color="inherit">
            {contentData.title}
          </Typography>
          <Typography variant="subtitle1" color="inherit" gutterBottom>
            {contentData.subtitle}
          </Typography>
          <hr className={classes.hr} />
          <Typography variant="body1" color="inherit" gutterBottom>
            {contentData.body}
          </Typography>
          <Typography variant="body1" gutterBottom color="inherit">
            <ButtonBase href={contentData.readMore.url}>
              {contentData.readMore.text}
            </ButtonBase>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(CImageText);
