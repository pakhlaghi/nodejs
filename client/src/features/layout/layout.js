import React from "react";
import Header from "./header";
import Footer from "./footer";
// UI
import styles from "./layout.style";
import { withStyles } from "@material-ui/core/styles";

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.layout}>
      <section>
        <Header />
      </section>
      <section>{children}</section>
      <section className={classes.footer}>
        <Footer />
      </section>
    </div>
  );
};

export default withStyles(styles)(Layout);
