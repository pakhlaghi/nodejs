import React from "react";
// UI
import classNames from "classNames";
import styles from "./cTitleText.style";
import { withStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

import {
  Input,
  Divider,
  FormControlLabel,
  Switch,
  Typography,
  Paper,
  IconButton,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel
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
        containerBackground: contentData.background,

        imageWidth: contentData.image && contentData.image.width,
        imagePosition: contentData.image && contentData.image.position,
        imageSwitch: contentData.image && contentData.image.isVisible,
        imageAlign: contentData.image && contentData.image.align,
        imageTitle: contentData.image && contentData.image.title,
        imageUrl: contentData.image && contentData.image.url,

        titleText: contentData.title.text,
        titleColor: contentData.title.color,
        titleSwitch: contentData.title.isVisible,
        titleAlign: contentData.title.align,

        subTitleText: contentData.subTitle.text,
        subTitleColor: contentData.subTitle.color,
        subTitleSwitch: contentData.subTitle.isVisible,
        subTitleAlign: contentData.subTitle.align,

        lineWidth: contentData.line.width,
        lineColor: contentData.line.color,
        lineSwitch: contentData.line.isVisible,
        lineAlign: contentData.line.align,

        bodyText: contentData.body.text,
        bodyColor: contentData.body.color,
        bodySwitch: contentData.body.isVisible,
        bodyAlign: contentData.body.align,

        readMoreText: contentData.readMore.text,
        readMoreUrl: contentData.readMore.url,
        readMoreColor: contentData.readMore.color,
        readMoreSwitch: contentData.readMore.isVisible,
        readMoreAlign: contentData.readMore.align
      }
    };
  }

  render() {
    const {
      classes,
      handleApplyChanges,
      handleCancelEditing,
      moduleType,
      contentData
    } = this.props;
    const { inputs } = this.state;
    const staticContent = {
      header: {
        title: "Edit"
      },
      container: {
        title: "Global",
        label: {
          color: {
            text: "Module Text Color",
            background: "Module Background"
          }
        }
      },
      image: {
        title: "Image",
        label: {
          width: "Image Width",
          switch: "Visible",
          title: "Image Title",
          url: "Image URL"
        }
      },
      title: {
        title: "Title",
        label: {
          text: "Title Text",
          color: "Text Color",
          switch: "Visible"
        }
      },
      subTitle: {
        title: "Sub-Title",
        label: {
          text: "Sub-Title Text",
          color: "Text Color",
          switch: "Visible"
        }
      },
      line: {
        title: "Line",
        label: {
          width: "Line Width",
          color: "Text Color",
          switch: "Visible"
        }
      },
      body: {
        title: "Body",
        label: {
          text: "Body Content",
          color: "Text Color",
          switch: "Visible"
        }
      },
      readMore: {
        title: "Read More Link",
        label: {
          text: "Read More Text",
          url: "Url",
          color: "Text Color",
          switch: "Visible"
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
          this.setState({
            inputs: { ...inputs, [e.target.id]: e.target.checked }
          });
          break;

        case "radio":
          this.setState({
            inputs: { ...inputs, [e.target.name]: e.target.value }
          });
          break;

        default:
          this.setState({
            inputs: {
              ...inputs,
              [e.target.id == "" ? e.target.name : e.target.id]: e.target.value
            }
          });
          break;
      }
    };

    const handleApply = _ => {
      handleApplyChanges(this.state.inputs, moduleType);
    };

    const handleCancel = _ => {
      handleCancelEditing();
    };

    const handleNoColor = id => _ => {
      this.setState({
        inputs: { ...inputs, [id]: "" }
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

              <CCColorPicker
                id="containerBackground"
                value={inputs.containerBackground}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.container.label.color.background}
                defaultColor="white"
              />
            </div>
            <Divider />

            {/* --Image-- */}
            {contentData.image && (
              <React.Fragment>
                <div className={classes.paper}>
                  <div className={classes.title}>
                    <Typography variant="h6">
                      {staticContent.image.title}
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          id="imageSwitch"
                          defaultChecked={inputs.imageSwitch}
                          onChange={handleInputChange}
                          color="primary"
                        />
                      }
                      label={staticContent.image.label.switch}
                      className={classes.pullRight}
                    />
                  </div>

                  <FormControl component="fieldset" className={classes.margin}>
                    <FormLabel component="legend" className={classes.legend}>
                      Alignment
                    </FormLabel>
                    <RadioGroup
                      aria-label="Alignment"
                      value={inputs.imageAlign}
                      onChange={handleInputChange}
                      row={true}
                      name="imageAlign"
                    >
                      <FormControlLabel
                        value="start"
                        control={<Radio />}
                        label="Start"
                      />
                      <FormControlLabel
                        value="center"
                        control={<Radio />}
                        label="Center"
                      />
                      <FormControlLabel
                        value="end"
                        control={<Radio />}
                        label="End"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl component="fieldset" className={classes.margin}>
                    <FormLabel component="legend" className={classes.legend}>
                      Position
                    </FormLabel>
                    <RadioGroup
                      aria-label="Position"
                      value={inputs.imagePosition}
                      onChange={handleInputChange}
                      row={true}
                      name="imagePosition"
                    >
                      <FormControlLabel
                        value="top"
                        control={<Radio />}
                        label="Top"
                      />
                      <FormControlLabel
                        value="right"
                        control={<Radio />}
                        label="Right"
                      />
                      <FormControlLabel
                        value="bottom"
                        control={<Radio />}
                        label="Bottom"
                      />
                      <FormControlLabel
                        value="left"
                        control={<Radio />}
                        label="Left"
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    id="imageUrl"
                    label={staticContent.image.label.url}
                    className={classes.input}
                    variant="filled"
                    defaultValue={inputs.imageUrl}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="imageTitle"
                    label={staticContent.image.label.title}
                    className={classes.input}
                    variant="filled"
                    defaultValue={inputs.imageTitle}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="imageWidth"
                    label={staticContent.image.label.width}
                    className={classes.input}
                    variant="filled"
                    defaultValue={inputs.imageWidth}
                    onChange={handleInputChange}
                  />
                </div>
                <Divider />
              </React.Fragment>
            )}

            {/* --Title-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.title.title}
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      id="titleSwitch"
                      defaultChecked={inputs.titleSwitch}
                      onChange={handleInputChange}
                      color="primary"
                    />
                  }
                  label={staticContent.title.label.switch}
                  className={classes.pullRight}
                />
              </div>

              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend" className={classes.legend}>
                  Alignment
                </FormLabel>
                <RadioGroup
                  aria-label="Alignment"
                  value={inputs.titleAlign}
                  onChange={handleInputChange}
                  name="titleAlign"
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

              <TextField
                id="titleText"
                label={staticContent.title.label.text}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.titleText}
                onChange={handleInputChange}
              />

              <CCColorPicker
                id="titleColor"
                value={inputs.titleColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.title.label.color}
              />
            </div>
            <Divider />

            {/* --Sub Title-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.subTitle.title}
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      id="subTitleSwitch"
                      defaultChecked={inputs.subTitleSwitch}
                      onChange={handleInputChange}
                      color="primary"
                    />
                  }
                  label={staticContent.subTitle.label.switch}
                  className={classes.pullRight}
                />
              </div>

              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend" className={classes.legend}>
                  Alignment
                </FormLabel>
                <RadioGroup
                  aria-label="Alignment"
                  value={inputs.subTitleAlign}
                  onChange={handleInputChange}
                  row={true}
                  name="subTitleAlign"
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

              <TextField
                id="subTitleText"
                label={staticContent.subTitle.label.text}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.subTitleText}
                onChange={handleInputChange}
              />

              <CCColorPicker
                id="subTitleColor"
                value={inputs.subTitleColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.subTitle.label.color}
              />
            </div>
            <Divider />

            {/* --Line-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">{staticContent.line.title}</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      id="lineSwitch"
                      defaultChecked={inputs.lineSwitch}
                      onChange={handleInputChange}
                      color="primary"
                    />
                  }
                  label={staticContent.line.label.switch}
                  className={classes.pullRight}
                />
              </div>

              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend" className={classes.legend}>
                  Alignment
                </FormLabel>
                <RadioGroup
                  aria-label="Alignment"
                  value={inputs.lineAlign}
                  onChange={handleInputChange}
                  row={true}
                  name="lineAlign"
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

              <TextField
                id="lineWidth"
                label={staticContent.line.label.width}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.lineWidth}
                onChange={handleInputChange}
              />

              <CCColorPicker
                id="lineColor"
                value={inputs.lineColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.line.label.color}
              />
            </div>
            <Divider />

            {/* --Body-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">{staticContent.body.title}</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      id="bodySwitch"
                      defaultChecked={inputs.bodySwitch}
                      onChange={handleInputChange}
                      color="primary"
                    />
                  }
                  label={staticContent.body.label.switch}
                  className={classes.pullRight}
                />
              </div>

              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend" className={classes.legend}>
                  Alignment
                </FormLabel>
                <RadioGroup
                  aria-label="Alignment"
                  value={inputs.bodyAlign}
                  onChange={handleInputChange}
                  row={true}
                  name="bodyAlign"
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

              <TextField
                id="bodyText"
                label={staticContent.body.label.text}
                className={classes.input}
                variant="filled"
                multiline
                defaultValue={inputs.bodyText}
                onChange={handleInputChange}
              />

              <CCColorPicker
                id="bodyColor"
                value={inputs.bodyColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.body.label.color}
              />
            </div>
            <Divider />

            {/* --Read More-- */}
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.readMore.title}
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      id="readMoreSwitch"
                      defaultChecked={inputs.readMoreSwitch}
                      onChange={handleInputChange}
                      color="primary"
                    />
                  }
                  label={staticContent.readMore.label.switch}
                  className={classes.pullRight}
                />
              </div>

              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend" className={classes.legend}>
                  Alignment
                </FormLabel>
                <RadioGroup
                  aria-label="Alignment"
                  value={inputs.readMoreAlign}
                  onChange={handleInputChange}
                  row={true}
                  name="readMoreAlign"
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

              <TextField
                id="readMoreText"
                label={staticContent.readMore.label.text}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.readMoreText}
                onChange={handleInputChange}
              />

              <TextField
                id="readMoreUrl"
                label={staticContent.readMore.label.url}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.readMoreUrl}
                onChange={handleInputChange}
              />

              <CCColorPicker
                id="readMoreColor"
                value={inputs.readMoreColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.readMore.label.color}
              />
            </div>
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

export default withStyles(styles)(CTitleText);
