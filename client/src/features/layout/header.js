import React from "react";
//components
import HeaderContent from "./headerContent";
import TopBar from "./topBar";
// UI
import styles from "./header.style";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classNames";
import { Grid } from "@material-ui/core";

const Header = props => {
  // props
  const {
    classes,
    isFullHeader,
    isDrawerOpen,
    onToggleDrawer,
    contentData
  } = props;
  const headerContentData = {
    title: "Header Content",
    subTitle: `Regardless of whether you are a photography industry professional or
    just a newcomer hobbyist, editing and post-processing your pics on
    the go is now so much easier!`,
    buttons: {
      primary: {
        title: "Primary",
        url: "#Primary"
      },
      secondary: {
        title: "Secondary",
        url: "#Secondary"
      }
    }
  };

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
        contentData={contentData}
      />
      <HeaderContent isVisible={isFullHeader} contentData={headerContentData} />
    </Grid>
  );
};

export default withStyles(styles)(Header);
