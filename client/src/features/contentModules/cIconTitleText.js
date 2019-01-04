import React from "react";
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

const CIconTitleText = ({ classes, width, contentData }) => {
  const isSmall = width.indexOf("s") >= 0;

  return (
    <div>
      <div className={classes.root}>
        <GridList
          cellHeight={"auto"}
          className={classes.gridList}
          cols={isSmall ? 1 : 3}
        >
          {contentData.map(tile => (
            <GridListTile cols={tile.cols || 1} key={tile.id}>
              <div className={classes.box}>
                <div className={classes.center}>
                  <Avatar className={classes.avatar}>
                    <CCMaterialIcon icon={tile.icon} />
                  </Avatar>
                </div>

                <Typography variant="subtitle2" gutterBottom>
                  {tile.title}
                </Typography>
                <Typography variant="body1">{tile.text}</Typography>
              </div>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default withWidth()(withStyles(styles)(CIconTitleText));
