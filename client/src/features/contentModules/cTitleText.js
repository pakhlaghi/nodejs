import React from "react";
// UI
import styles from "./cTitleText.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase, withTheme } from "@material-ui/core";
import CTitleTextEdit from "./cTitleTextEdit";

const CTitleText = props => {
  // from props
  const {
    classes,
    theme,
    contentData,
    handleApplyChanges,
    handleCancelEditing
  } = props;

  // line style
  const lineStyle = {
    width: contentData.line.width ? contentData.line.width : "80px",
    backgroundColor: 
    (contentData.line && contentData.line.color) || contentData.color || theme.palette.secondary.main
  };

  return (
    <React.Fragment>
      <div
        className={classes.container}
        style={{ background: contentData.background }}
      >
        <div className={classes.contentWidth}>
          {contentData.title && contentData.title.isVisible && (
            <Typography
              variant="title"
              align={contentData.title.align}
              style={{ color: contentData.title.color || contentData.color }}
            >
              {contentData.title.text}
            </Typography>
          )}

          {contentData.subTitle && contentData.subTitle.isVisible && (
            <Typography
              variant="subtitle1"
              gutterBottom
              align={contentData.subTitle.align}
              style={{ color: contentData.subTitle.color || contentData.color }}
            >
              {contentData.subTitle.text}
            </Typography>
          )}

          {contentData.line && contentData.line.isVisible && (
            <hr
              className={classes.hr}
              style={lineStyle}
              align={contentData.line.align}
            />
          )}

          {contentData.body && contentData.body.isVisible && (
            <Typography
              variant="body1"
              gutterBottom
              align={contentData.body.align}
              style={{ color: contentData.body.color || contentData.color }}
            >
              {contentData.body.text}
            </Typography>
          )}

          {contentData.readMore && contentData.readMore.isVisible && (
            <Typography
              variant="body1"
              gutterBottom
              align={contentData.readMore.align}
              style={{ color: contentData.readMore.color || contentData.color }}
            >
              <ButtonBase href={contentData.readMore.url}>
                {contentData.readMore.text}
              </ButtonBase>
            </Typography>
          )}
        </div>
      </div>
      {contentData.isEditing && (
        <CTitleTextEdit
          contentData={contentData}
          handleApplyChanges={handleApplyChanges}
          handleCancelEditing={handleCancelEditing}
          moduleType="cTitleText"
        />
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(withTheme()(CTitleText));
