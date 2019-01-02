import React from "react";
import Header from "./header";
import Footer from "./footer";
// UI
import styles from "./layout.style";
import { withStyles } from "@material-ui/core/styles";

const Layout = props => {
  const { children, classes, pathname, layoutSt, onToggleDrawer } = props;
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
      ? routeExtra.showFooterS
      : true;

  return (
    <div className={classes.layout}>
      {showHeader ? (
        <Header
          isFullHeader={isFullHeader}
          isDrawerOpen={layoutSt.isDrawerOpen}
          onToggleDrawer={onToggleDrawer}
          contentData={layoutSt.contentData.headerContent}
        />
      ) : null}
      <section className={classes.content}>{children}</section>
      {showFooter ? (
        <Footer footerContent={layoutSt.contentData.footerContent} />
      ) : null}
    </div>
  );
};

export default withStyles(styles)(Layout);
