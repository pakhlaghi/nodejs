import React from "react";
// UI
import styles from "./footer.style";
import { withStyles } from "@material-ui/core/styles";

const Footer = ({ classes }) => {
  return <section className={classes.footer}>Footer</section>;
};

export default withStyles(styles)(Footer);
