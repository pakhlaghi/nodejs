import React from "react";
import CHeader from "./contentModules/header/cHeader";
import CFooter from "./contentModules/cFooter";
// UI
import styles from "./layout.style";
import { withStyles } from "@material-ui/core/styles";

const Layout = props => {
  // props
  const { children, classes, layoutSt, onToggleDrawer } = props;

  return (
    <div className={classes.layout}>
      {layoutSt.contentData && layoutSt.contentData.headerContent && (
        <CHeader
          isFullHeader={layoutSt.contentData.headerContent.isFullHeader}
          isDrawerOpen={layoutSt.isDrawerOpen}
          contentData={layoutSt.contentData.headerContent}
          onToggleDrawer={onToggleDrawer}
        />
      )}
      <section className={classes.content}>{children}</section>
      {layoutSt.contentData && layoutSt.contentData.footerContent && (
        <CFooter contentData={layoutSt.contentData && layoutSt.contentData.footerContent} />
      )}
    </div>
  );
};

export default withStyles(styles)(Layout);
