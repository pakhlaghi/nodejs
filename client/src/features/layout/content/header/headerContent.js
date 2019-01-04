import React from "react";
// UI
import styles from "./headerContent.style";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import classNames from "classnames";

const HeaderContent = ({ classes, isVisible, contentData }) => {
  return (
    <React.Fragment>
      {isVisible ? (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.center}
        >
          <Typography
            variant="h1"
            color="inherit"
            gutterBottom
            className={classes.width}
          >
            {contentData.title ? contentData.title : ""}
          </Typography>
          <Typography
            variant="subtitle1"
            color="inherit"
            gutterBottom
            className={classes.width}
          >
            {contentData.subTitle ? contentData.subTitle : ""}
          </Typography>
          <div>
            {contentData.buttons && contentData.buttons.primary ? (
              <Button
                url={
                  contentData.buttons ? contentData.buttons.primary.url : "#"
                }
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                {contentData.buttons.primary.title}
              </Button>
            ) : null}
            {contentData.buttons && contentData.buttons.secondary ? (
              <Button
                url={
                  contentData.buttons ? contentData.buttons.secondary.url : "#"
                }
                variant="contained"
                size="large"
                className={classNames(classes.button, classes.secondary)}
              >
                {contentData.buttons ? contentData.buttons.secondary.title : ""}
              </Button>
            ) : null}
          </div>
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

export default withStyles(styles)(HeaderContent);
