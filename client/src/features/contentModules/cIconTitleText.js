import React from "react";
import CIconTitleTextEdit from "./cIconTitleTextEdit";
// Component
import CCMaterialIcon from "../../utility/ccMaterialIcon";
// UI
import styles from "./cIconTitleText.style";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
// material
import Avatar from "@material-ui/core/Avatar";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";

const CIconTitleText = props => {
  // props
  const {
    classes,
    width,
    contentData,
    handleApplyChanges,
    handleCancelEditing
  } = props;

  const isSmall = width.indexOf("s") >= 0;
  const columnNumber = contentData.columnNumber || 3;

  return (
    <React.Fragment>
      <div>
        <div className={classes.root}>
          <GridList
            cellHeight={"auto"}
            className={classes.gridList}
            cols={isSmall ? 1 : columnNumber}
          >
            {contentData.tiles.map(tile => (
              <GridListTile key={tile.id}>
                <div
                  className={classes.box}
                  style={{
                    color: tile.color || contentData.containerColor
                  }}
                >
                  <div className={classes.center}>
                    <Avatar className={classes.avatar}>
                      <CCMaterialIcon icon={tile.icon} />
                    </Avatar>
                  </div>

                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    color="inherit"
                    align={tile.align || contentData.align}
                  >
                    {tile.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="inherit"
                    align={tile.align || contentData.align}
                  >
                    {tile.text}
                  </Typography>
                </div>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>

      {contentData.isEditing && (
        <CIconTitleTextEdit
          contentData={contentData}
          handleApplyChanges={handleApplyChanges}
          handleCancelEditing={handleCancelEditing}
          moduleType="cIconTitleText"
        />
      )}
    </React.Fragment>
  );
};

export default withWidth()(withStyles(styles)(CIconTitleText));
