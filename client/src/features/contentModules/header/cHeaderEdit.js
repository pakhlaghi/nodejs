import React from "react";
// UI
import classNames from "classNames";
import styles from "./../cTitleText.style";
import { withStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Divider,
  Typography,
  Paper,
  IconButton,
  Button,
  TextField,
  FormControlLabel,
  Switch
} from "@material-ui/core";

// Utility
import CCColorPicker from "../../../utility/ccColorPicker";

class CHeaderEdit extends React.Component {
  // add state because of radio button
  constructor(props) {
    super(props);
    const { contentData } = props;

    this.state = {
      inputs: {
        isFullHeader: contentData.isFullHeader,
        color: contentData.color,
        backgroundImage: contentData.background.image,
        backgroundHeight: contentData.background.height,

        topBarTitle: contentData.topBar.title,
        topBarMenuId: contentData.topBar.menuId,

        contentTitle: contentData.title,
        contentSubTitle: contentData.subTitle,

        buttonPrimaryText: contentData.buttons.primary.text,
        buttonPrimaryUrl: contentData.buttons.primary.url,
        buttonSecText: contentData.buttons.secondary.text,
        buttonSecUrl: contentData.buttons.secondary.url
      }
    };
  }

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
      topBar: {
        title: "Top Bar",
        label: {
          isFullHeader: "Full Header",
          color: "Text Color",
          title: "Title",
          backgroundImage: "Background Image",
          backgroundHeight: "Background Height",
          menuId: "Menu"
        }
      },
      content: {
        title: "Content",
        label: {
          title: "Title",
          subTitle: "Sub-Title"
        }
      },
      button: {
        title: "Buttons",
        label: {
          primaryUrl: "Primary Button Url",
          primaryTitle: "Primary Button Text",
          secTitle: "Secondary Button Text",
          secUrl: "Secondary Button Url"
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

            const socialData = this.state.inputs.socialData.map(
              (item, index) => {
                if (index == inputIndex) {
                  item[inputId] = e.target.checked;
                }
                return item;
              }
            );

            this.setState({ ...inputs, socialData: socialData });
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
          if (e.target.id.indexOf("-") >= 0) {
            const inputIndex = e.target.id.split("-")[1] - 1;
            const inputId = e.target.id.split("-")[0];

            const socialData = this.state.inputs.socialData.map(
              (item, index) => {
                if (index == inputIndex) {
                  item[inputId] = e.target.value;
                }
                return item;
              }
            );

            this.setState({ ...inputs, socialData: socialData });
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
      handleApplyChanges(this.state.inputs, "cHeader");
    };

    const handleCancel = _ => {
      handleCancelEditing();
    };

    const handleNoColor = id => _ => {
      if (id.indexOf("-") >= 0) {
        const inputIndex = id.split("-")[1] - 1;
        const inputId = id.split("-")[0];

        const socialData = this.state.inputs.socialData.map((item, index) => {
          if (index == inputIndex) {
            item[inputId] = "";
          }
          return item;
        });

        this.setState({ ...inputs, socialData: socialData });
      } else {
        this.setState({
          inputs: { ...inputs, [id]: "" }
        });
      }
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
            {/* --topBar-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.topBar.title}
                </Typography>
              </div>

              <FormControlLabel
                className={classes.input}
                labelPlacement="end"
                label={staticContent.topBar.label.isFullHeader}
                control={
                  <Switch
                    id="isFullHeader"
                    defaultChecked={inputs.isFullHeader}
                    onChange={handleInputChange}
                    color="primary"
                  />
                }
                label={staticContent.topBar.label.isFullHeader}
              />

              <CCColorPicker
                id="color"
                value={inputs.color}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.topBar.label.color}
              />

              <TextField
                id="topBarTitle"
                label={staticContent.topBar.label.title}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.topBarTitle}
                onChange={handleInputChange}
              />

              <TextField
                id="backgroundImage"
                label={staticContent.topBar.label.backgroundImage}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.backgroundImage}
                onChange={handleInputChange}
              />

              <TextField
                id="backgroundHeight"
                label={staticContent.topBar.label.backgroundHeight}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.backgroundHeight}
                onChange={handleInputChange}
              />

              {/* toDo: replace with dropdown */}
              <TextField
                id="topBarMenuId"
                label={staticContent.topBar.label.menuId}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.topBarMenuId}
                onChange={handleInputChange}
              />
            </div>
            <Divider />

            {/* --Content-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.content.title}
                </Typography>
              </div>

              <TextField
                id="contentTitle"
                label={staticContent.content.label.title}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.contentTitle}
                onChange={handleInputChange}
              />

              <TextField
                id="contentSubTitle"
                label={staticContent.content.label.subTitle}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.contentSubTitle}
                onChange={handleInputChange}
              />
            </div>
            <Divider />

            {/* --Button-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.content.title}
                </Typography>
              </div>

              <TextField
                id="buttonPrimaryText"
                label={staticContent.button.label.primaryTitle}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.buttonPrimaryText}
                onChange={handleInputChange}
              />

              <TextField
                id="buttonPrimaryUrl"
                label={staticContent.button.label.primaryUrl}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.buttonPrimaryUrl}
                onChange={handleInputChange}
              />

              <TextField
                id="buttonSecText"
                label={staticContent.button.label.secTitle}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.buttonSecText}
                onChange={handleInputChange}
              />

              <TextField
                id="buttonSecUrl"
                label={staticContent.button.labelsecUrl}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.buttonSecUrl}
                onChange={handleInputChange}
              />
            </div>
            <Divider />
          </div>
          <Divider />

          {/* --Footer-- */}
          <div className={classes.footer}>
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

export default withStyles(styles)(CHeaderEdit);
