import React from "react";
import CTitleTextEdit from "./cTitleTextEdit";

// UI
import styles from "./cImageText.style";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Typography, ButtonBase } from "@material-ui/core";
import classNames from "classnames";

const CImageText = props => {
  const {
    classes,
    theme,
    contentData,
    handleApplyChanges,
    handleCancelEditing
  } = props;

  const lineStyle = {
    width: contentData.line && contentData.line.width ? contentData.line.width : "80px",
    backgroundColor: 
    (contentData.line && contentData.line.color) || contentData.color || theme.palette.secondary.main
  };

  const imagePosisionMap = {
    top: "column",
    bottom: "column-reverse",
    right: "row-reverse",
    left: "row"
  };

  const imageAlignMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end"
  };

  const imagePosition = 
    contentData.image.position && imagePosisionMap[contentData.image.position] || null;

  const imageAlign =
    contentData.image.align && imageAlignMap[contentData.image.align] || null;

  return (
    <React.Fragment>
      <div
        className={classes.container}
        style={{ background: contentData.background }}
      >
        <div
          className={classes.contentWidth}
          style={{ flexDirection: imagePosition }}
        >
          {contentData.image.isVisible && contentData.image.url && (
            <div
              className={classNames(classes.box, classes.imageBox)}
              style={{ width: contentData.image.width, alignSelf: imageAlign }}
            >
              <img
                className={classes.image}
                src={contentData.image.url}
                alt={contentData.image.title || ""}
              />
            </div>
          )}

          <div
            className={classes.box}
            style={{ width: contentData.contentWidth }}
          >
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
                style={{
                  color: contentData.subTitle.color || contentData.color
                }}
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
                style={{
                  color: contentData.readMore.color || contentData.color
                }}
              >
                <ButtonBase href={contentData.readMore.url}>
                  {contentData.readMore.text}
                </ButtonBase>
              </Typography>
            )}
          </div>
        </div>
      </div>

      {contentData.isEditing && (
        <CTitleTextEdit
          contentData={contentData}
          handleApplyChanges={handleApplyChanges}
          handleCancelEditing={handleCancelEditing}
          moduleType="cImageText"
        />
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(withTheme()(CImageText));
