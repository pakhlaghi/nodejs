import React from "react";
// Util
import CCMaterialIcon from "../../utility/ccMaterialIcon";
// UI
import styles from "./footer.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";

const Footer = props => {
  // props
  const { classes, footerContent } = props;

  return (
    <section className={classes.footer} style={footerContent.style}>
      <Typography variant="subheading" color="inherit">
        {footerContent.text}
      </Typography>
      <div>
        {footerContent.socialData.map(social => (
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
    </section>
  );
};

export default withStyles(styles)(Footer);
