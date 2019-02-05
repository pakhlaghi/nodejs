import React from "react";
//components
import HeaderContent from "./headerContent";
import TopBar from "./topBar";
// UI
import styles from "./cHeader.style";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classNames";
import { Grid } from "@material-ui/core";
import CHeaderEdit from "./cHeaderEdit";

const CHeader = props => {
  // props
  const {
    classes,
    isFullHeader,
    isDrawerOpen,
    onToggleDrawer,
    contentData,
    handleApplyChanges,
    handleCancelEditing
  } = props;

  return (
    <React.Fragment>
      <Grid
        container
        wrap="wrap"
        alignItems="flex-start"
        className={classNames({
          [classes.root]: true,
          [classes.fullHeader]: contentData.isFullHeader || isFullHeader
        })}
        style={{
          "--background-image": `url(${contentData.background.image})`,
          "--background-height": contentData.background.height
        }}
      >
        {contentData && contentData.topBar && (
          <TopBar
            isDrawerOpen={isDrawerOpen}
            onToggleDrawer={onToggleDrawer}
            contentData={contentData.topBar}
          />
        )}
        {contentData && (
          <HeaderContent
            isVisible={contentData.isFullHeader || isFullHeader}
            contentData={contentData}
          />
        )}
      </Grid>
      {contentData.isEditing && (
        <CHeaderEdit
          contentData={contentData}
          handleApplyChanges={handleApplyChanges}
          handleCancelEditing={handleCancelEditing}
        />
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(CHeader);
