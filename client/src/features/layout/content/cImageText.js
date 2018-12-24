import React from "react";
// UI
import styles from "./cImageText.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase } from "@material-ui/core";
import classNames from "classnames";

const CImageText = ({ classes }) => {
  const contentData = {
    image: {
      url:
        "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg5.png",
      title: "mobile"
    },
    title: "EDIT PHOTOS on the Go!",
    subtitle: `Our app has the most essential editing features, allowing you to
    enhance all the pictures you’ve taken on the go!`,
    body: `As a team of professional photographers who were all young enough to
    remember working with the Photoshop V 1.0, we were always on the
    verge of cutting-edge photos post-processing technologies.`,
    readMore: {
      text: "Read More",
      url: "#"
    }
  };

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
