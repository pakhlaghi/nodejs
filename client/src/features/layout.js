import React from "react";
import CHeader from "./contentModules/header/cHeader";
import CFooter from "./contentModules/cFooter";
// UI
import styles from "./layout.style";
import { withStyles } from "@material-ui/core/styles";

const Layout = props => {
  // props
  const { children, classes, pathname, layoutSt, onToggleDrawer } = props;

  // check route prop
  const routes = children.props.routes;
  const route = routes && routes.filter(isCurrentRoute(pathname));
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
      {showHeader && (
        <CHeader
          isFullHeader={isFullHeader}
          isDrawerOpen={layoutSt.isDrawerOpen}
          contentData={layoutSt.contentData.headerContent}
          onToggleDrawer={onToggleDrawer}
        />
      )}
      <section className={classes.content}>{children}</section>
      {showFooter && (
        <CFooter contentData={layoutSt.contentData.footerContent} />
      )}
    </div>
  );
};

const isCurrentRoute = pathname => route =>
  route.path == pathname ||
  (route.path.indexOf(":") >= 0 &&
    pathname.indexOf(route.path.split(":")[0]) >= 0);

export default withStyles(styles)(Layout);
