import React from "react";
// UI
import classNames from "classNames";
import styles from "./cTitleText.style";
import { withStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {
  Divider,
  Typography,
  Paper,
  IconButton,
  Button,
  TextField
} from "@material-ui/core";

// Utility
import CCColorPicker from "../../utility/ccColorPicker";

class CTitleText extends React.Component {
  // add state because of radio button
  constructor(props) {
    super(props);
    const { contentData } = props;

    this.state = {
      inputs: {
        containerColor: contentData.color,
        tiles: this.mapContentToState(contentData)
      }
    };
  }

  mapContentToState = contentData => {
    return contentData.tiles.map((tile, index) => {
      return {
        id: index + 1,
        imageTitle: tile.title,
        imageSubTitle: tile.subTitle,
        imageDetails: tile.details,
        imageUrl: tile.imageUrl,
        imageLinkUrl: tile.linkUrl,
        imageTextColor: tile.textColor
      };
    });
  };

  render() {
    // from props
    const { classes, handleApplyChanges, handleCancelEditing } = this.props;

    // from state
    const { inputs } = this.state;

    // static content
    const staticContent = {
      header: {
        title: "Edit"
      },
      container: {
        title: "Global",
        label: {
          columnNumber: "Nomber of Columns",
          color: {
            text: "Module Text Color"
          }
        }
      },
      image: {
        title: "Tile",
        label: {
          delete: "Delete",
          title: "Title",
          imageLinkUrl: "Link to URL",
          subTitle: "Sub-Title",
          imageUrl: "Image URL",
          details: "Details",
          color: "Text Color"
        }
      },
      footer: {
        button: {
          cancel: "Cancel",
          apply: "Apply Changes"
        }
      }
    };

    const handleInputChange = e => {
      switch (e.target.type) {
        case "checkbox":
          if (e.target.id.indexOf("-")) {
            const inputIndex = e.target.id.split("-")[1] - 1;
            const inputId = e.target.id.split("-")[0];

            const tiles = this.state.inputs.tiles.map((tile, index) => {
              if (index == inputIndex) {
                tile[inputId] = e.target.checked;
              }
              return tile;
            });

            this.setState({ ...inputs, tiles: tiles });
          } else {
            this.setState({
              inputs: { ...inputs, [e.target.id]: e.target.checked }
            });
          }
          break;

        case "radio":
          this.setState({
            inputs: { ...inputs, [e.target.name]: e.target.value }
          });
          break;

        default:
          if (e.target.id.indexOf("-")) {
            const inputIndex = e.target.id.split("-")[1] - 1;
            const inputId = e.target.id.split("-")[0];

            const tiles = this.state.inputs.tiles.map((tile, index) => {
              if (index == inputIndex) {
                tile[inputId] = e.target.value;
              }
              return tile;
            });

            this.setState({ ...inputs, tiles: tiles });
          } else {
            this.setState({
              inputs: {
                ...inputs,
                [e.target.id == "" ? e.target.name : e.target.id]: e.target
                  .value
              }
            });
          }
          break;
      }
    };

    const handleApply = _ => {
      handleApplyChanges(this.state.inputs, "cImageTile");
    };

    const handleCancel = _ => {
      handleCancelEditing();
    };

    const handleNoColor = id => _ => {
      this.setState({
        inputs: { ...inputs, [id]: "" }
      });
    };

    const handleRemoveClick = index => _ => {
      this.state.inputs.tiles.splice(index, 1);
      this.setState({
        inputs: { ...inputs, tiles: this.state.inputs.tiles }
      });
    };

    const handleAddTileClick = _ => {
      const lastId = this.state.inputs.tiles[this.state.inputs.tiles.length - 1]
        .id;
      const emptyObj = {
        id: lastId + 1,
        imageTitle: "",
        imageSubTitle: "",
        imageDetails: "",
        imageUrl: "",
        imageLinkUrl: "",
        imageTextColor: ""
      };

      this.state.inputs.tiles.push(emptyObj);
      this.setState({
        inputs: { ...inputs, tiles: this.state.inputs.tiles }
      });
    };

    return (
      <div
        className={classNames(
          classes.container,
          classes.noTopPadding,
          classes.topMargin
        )}
      >
        <Paper className={classes.topLayer}>
          {/* --Header-- */}
          <div className={classes.editHeader}>
            <Typography color="inherit" variant="h6">
              {staticContent.header.title}
            </Typography>
            <IconButton
              color="inherit"
              className={classes.closeIcon}
              onClick={handleCancelEditing}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />

          <div>
            {/* --Container-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.container.title}
                </Typography>
              </div>

              <CCColorPicker
                id="containerColor"
                value={inputs.containerColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.container.label.color.text}
              />
            </div>
            <Divider />

            {/* --Image-- */}
            {inputs.tiles.map((tile, index) => (
              <div className={classes.paper} key={tile.id}>
                <div className={classes.title}>
                  <Typography variant="h6">
                    {`${index + 1}- ${staticContent.image.title}`}
                  </Typography>
                  <IconButton
                    onClick={handleRemoveClick(index)}
                    className={`${classes.deleteIcon} ${classes.pullRight}`}
                    color="secondary"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </div>

                <TextField
                  id={`imageUrl-${index + 1}`}
                  label={staticContent.image.label.imageUrl}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.imageUrl}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`imageLinkUrl-${index + 1}`}
                  label={staticContent.image.label.imageLinkUrl}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.imageLinkUrl}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`imageTitle-${index + 1}`}
                  label={staticContent.image.label.title}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.imageTitle}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`imageSubTitle-${index + 1}`}
                  label={staticContent.image.label.subTitle}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.imageSubTitle}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`imageDetails-${index + 1}`}
                  label={staticContent.image.label.details}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.imageDetails}
                  onChange={handleInputChange}
                />

                <CCColorPicker
                  id={`imageTextColor-${index + 1}`}
                  value={tile.imageTextColor}
                  handleInputChange={handleInputChange}
                  handleNoColor={handleNoColor}
                  label={staticContent.image.label.color}
                />
              </div>
            ))}
          </div>
          <Divider />

          {/* --Footer-- */}
          <div className={classes.footer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleAddTileClick}
            >
              <AddBoxIcon
                className={classNames(classes.leftIcon, classes.leftIcon)}
              />
              Add Tile
            </Button>
            <div className={classes.pullRight}>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={handleCancel}
              >
                {staticContent.footer.button.cancel}
                <CancelIcon className={classes.rightIcon} />
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleApply}
              >
                {staticContent.footer.button.apply}
                <SaveIcon className={classes.rightIcon} />
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CTitleText);
