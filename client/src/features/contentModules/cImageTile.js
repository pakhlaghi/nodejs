import React from "react";
import CImageTileEdit from "./cImageTileEdit";
// UI
import styles from "./cImageTile.style";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
// Material
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

function CImageTile(props) {
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
            cellHeight={isSmall ? 200 : 1200 / columnNumber}
            className={classes.gridList}
            cols={isSmall ? 2 : columnNumber}
          >
            {contentData.tiles.map((tile, index) => (
              <GridListTile cols={tile.cols || 1} key={index}>
                <img src={tile.imageUrl} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.subTitle}</span>}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
      {contentData.isEditing && (
        <CImageTileEdit
          contentData={contentData}
          handleApplyChanges={handleApplyChanges}
          handleCancelEditing={handleCancelEditing}
        />
      )}
    </React.Fragment>
  );
}

export default withWidth()(withStyles(styles)(CImageTile));
