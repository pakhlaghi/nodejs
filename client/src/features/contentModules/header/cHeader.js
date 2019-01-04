import React from "react";
//components
import HeaderContent from "./headerContent";
import TopBar from "./topBar";
// UI
import styles from "./cHeader.style";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classNames";
import { Grid } from "@material-ui/core";

const CHeader = props => {
  // props
  const {
    classes,
    isFullHeader,
    isDrawerOpen,
    onToggleDrawer,
    contentData
  } = props;

  return (
    <Grid
      container
      wrap="wrap"
      alignItems="flex-start"
      className={classNames({
        [classes.root]: true,
        [classes.fullHeader]: isFullHeader
      })}
    >
      <TopBar
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={onToggleDrawer}
        contentData={contentData.topBar}
      />
      <HeaderContent isVisible={isFullHeader} contentData={contentData} />
    </Grid>
  );
};

export default withStyles(styles)(CHeader);
