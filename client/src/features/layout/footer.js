import React from "react";
// Util
import CCMaterialIcon from "../../utility/ccMaterialIcon";
// UI
import styles from "./footer.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";

const Footer = ({ classes }) => {
  const socialData = [
    {
      id: 1,
      icon: "TabletMac",
      url: "http://www.google.com"
    },
    {
      id: 2,
      icon: "TabletMac",
      url: "http://www.google.com"
    },
    {
      id: 3,
      icon: "TabletMac",
      url: "http://www.google.com"
    }
  ];

  const footerData = {
    text: "Code Core Co. © 2018. Privacy Policy | Terms Of Use",
    style: {
      color: "#fff",
      backgroundColor: "#263238"
    }
  };

  return (
    <section className={classes.footer} style={footerData.style}>
      <Typography variant="subheading" color="inherit">
        {footerData.text}
      </Typography>
      <div>
        {socialData.map(social => (
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
