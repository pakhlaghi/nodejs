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

const tileData = [
  {
    img:
      "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img1.jpg",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img2.jpg",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img3.jpg",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img4.jpg",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img5.jpg",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img6.jpg",
    title: "Image",
    author: "author"
  }
];

function CImageTile(props) {
  const { classes, width } = props;
  const isSmall = width.indexOf("s") >= 0;
  return (
    <div>
      <div className={classes.root}>
        <GridList
          cellHeight={isSmall ? 200 : 400}
          className={classes.gridList}
          cols={isSmall ? 2 : 3}
        >
          {tileData.map(tile => (
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
