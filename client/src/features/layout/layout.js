import React from "react";
import Header from "./header";
import Footer from "./footer";
// UI
import styles from "./layout.style";
import { withStyles } from "@material-ui/core/styles";

const Layout = props => {
  const { children, classes, pathname } = props;
  const routes = children.props.routes;

  const route = routes && routes.filter(route => route.path == pathname);
  const isFullHeader =
    route && route.length && route[0].extra && route[0].extra.isFullHeader
      ? route[0].extra.isFullHeader
      : false;

  return (
    <div className={classes.layout}>
      <Header isFullHeader={isFullHeader} />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Layout);
