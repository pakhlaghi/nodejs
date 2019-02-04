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
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio
} from "@material-ui/core";

// Utility
import CCColorPicker from "../../utility/ccColorPicker";

class CIconTitleTextEdit extends React.Component {
  // add state because of radio button
  constructor(props) {
    super(props);
    const { contentData } = props;

    this.state = {
      inputs: {
        containerColor: contentData.containerColor,
        backgroundColor: contentData.backgroundColor,
        columnNumber: contentData.columnNumber,
        tiles: this.mapContentToState(contentData)
      }
    };
  }

  mapContentToState = contentData => {
    return contentData.tiles.map((tile, index) => {
      return {
        id: index + 1,
        title: tile.title,
        text: tile.text,
        url: tile.url,
        icon: tile.icon,
        color: tile.color,
        align: tile.align
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
            text: "Module Text Color",
            background: "Module Background Color"
          }
        }
      },
      tile: {
        title: "Tile",
        label: {
          delete: "Delete",
          title: "Title",
          url: "Link to URL",
          text: "Text",
          icon: "Icon",
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
          if (e.target.id.indexOf("-") >= 0) {
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
          if (e.target.name.indexOf("-") >= 0) {
            const inputIndex = e.target.name.split("-")[1] - 1;
            const inputId = e.target.name.split("-")[0];

            const tiles = this.state.inputs.tiles.map((tile, index) => {
              if (index == inputIndex) {
                tile[inputId] = e.target.value;
              }
              return tile;
            });

            this.setState({ ...inputs, tiles: tiles });
          } else {
            this.setState({
              inputs: { ...inputs, [e.target.name]: e.target.value }
            });
          }
          break;

        default:
          if (e.target.id.indexOf("-") >= 0) {
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
      handleApplyChanges(this.state.inputs, "cIconTitleText");
    };

    const handleCancel = _ => {
      handleCancelEditing();
    };

    const handleNoColor = id => _ => {
      if (id.indexOf("-") >= 0) {
        const inputIndex = id.split("-")[1] - 1;
        const inputId = id.split("-")[0];

        const tiles = this.state.inputs.tiles.map((tile, index) => {
          if (index == inputIndex) {
            tile[inputId] = "";
          }
          return tile;
        });

        this.setState({ ...inputs, tiles: tiles });
      } else {
        this.setState({
          inputs: { ...inputs, [id]: "" }
        });
      }
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
        title: "",
        text: "",
        url: "",
        icon: "",
        color: "",
        align: ""
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

              <TextField
                id={`columnNumber`}
                label={staticContent.container.label.columnNumber}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.columnNumber || 3}
                onChange={handleInputChange}
              />

              <CCColorPicker
                id="containerColor"
                value={inputs.containerColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.container.label.color.text}
              />

              <CCColorPicker
                id="backgroundColor"
                value={inputs.backgroundColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.container.label.color.background}
              />
            </div>
            <Divider />

            {/* --Image-- */}
            {inputs.tiles.map((tile, index) => (
              <div className={classes.paper} key={tile.id}>
                <div className={classes.title}>
                  <Typography variant="h6">
                    {`${index + 1}- ${staticContent.tile.title}`}
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
                  id={`icon-${index + 1}`}
                  label={staticContent.tile.label.icon}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.icon}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`url-${index + 1}`}
                  label={staticContent.tile.label.url}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.url}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`title-${index + 1}`}
                  label={staticContent.tile.label.title}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.title}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`text-${index + 1}`}
                  label={staticContent.tile.label.text}
                  className={classes.input}
                  variant="filled"
                  defaultValue={tile.text}
                  onChange={handleInputChange}
                />

                <FormControl component="fieldset" className={classes.margin}>
                  <FormLabel component="legend" className={classes.legend}>
                    Alignment
                  </FormLabel>
                  <RadioGroup
                    aria-label="Alignment"
                    value={tile.align}
                    onChange={handleInputChange}
                    name={`align-${index + 1}`}
                    row={true}
                  >
                    <FormControlLabel
                      value="left"
                      control={<Radio />}
                      label="Left"
                    />
                    <FormControlLabel
                      value="center"
                      control={<Radio />}
                      label="Center"
                    />
                    <FormControlLabel
                      value="right"
                      control={<Radio />}
                      label="Right"
                    />
                  </RadioGroup>
                </FormControl>

                <CCColorPicker
                  id={`color-${index + 1}`}
                  value={tile.color}
                  handleInputChange={handleInputChange}
                  handleNoColor={handleNoColor}
                  label={staticContent.tile.label.color}
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

export default withStyles(styles)(CIconTitleTextEdit);
