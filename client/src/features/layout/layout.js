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
  const routeExtra = route && route.length && route[0].extra;

  const isFullHeader =
    routeExtra && !(typeof routeExtra.isFullHeader === "undefined")
      ? routeExtra.isFullHeader
      : false;
  const showHeader =
    routeExtra && !(typeof routeExtra.showHeader === "undefined")
      ? routeExtra.showHeader
      : true;
  const showFooter =
    routeExtra && !(typeof routeExtra.showFooter === "undefined")
      ? routeExtra.showFooter
      : true;

  return (
    <div className={classes.layout}>
      {showHeader ? <Header isFullHeader={isFullHeader} /> : null}
      <section className={classes.content}>{children}</section>

      {showFooter ? <Footer /> : null}
    </div>
  );
};

export default withStyles(styles)(Layout);
