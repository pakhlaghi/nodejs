import React from "react";
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
  const { classes, width, contentData } = props;
  const isSmall = width.indexOf("s") >= 0;
  return (
    <div>
      <div className={classes.root}>
        <GridList
          cellHeight={isSmall ? 200 : 400}
          className={classes.gridList}
          cols={isSmall ? 2 : 3}
        >
          {contentData.map(tile => (
            <GridListTile cols={tile.cols || 1} key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
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
  );
}

export default withWidth()(withStyles(styles)(CImageTile));
