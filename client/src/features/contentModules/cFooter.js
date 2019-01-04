import React from "react";
// Util
import CCMaterialIcon from "../../utility/ccMaterialIcon";
// UI
import styles from "./cFooter.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";

const CFooter = props => {
  // props
  const { classes, contentData } = props;

  return (
    <section className={classes.footerContainer} style={contentData.style}>
      <div className={classes.footerContent}>
        <Typography variant="subheading" color="inherit">
          {contentData.text}
        </Typography>
        <div>
          {contentData.socialData.map(social => (
            <IconButton
              key={social.id}
              href={social.url}
              color="inherit"
              className={classes.button}
            >
              <CCMaterialIcon icon={social.icon} />
            </IconButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(CFooter);
