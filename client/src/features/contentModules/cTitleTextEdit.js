import React from "react";
// UI
import classNames from "classNames";
import styles from "./cTitleText.style";
import { withStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";

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

class CTitleText extends React.Component {
  // add state because of radio button
  constructor(props) {
    super(props);
    const { contentData } = props;

    this.state = {
      inputs: {
        containerColor: contentData.color,
        containerBackground: contentData.background,

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
    const { classes, handleApplyChanges, handleCancelEditing } = this.props;
    const { inputs } = this.state;
    const staticContent = {
      header: {
        title: "Edit"
      },
      container: {
        title: "Container",
        label: {
          color: {
            text: "Module Text Color",
            background: "Module Background"
          }
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
          width: "Line Widthh",
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
      handleApplyChanges(this.state.inputs, "cTitleText");
    };

    const handleCancel = _ => {
      handleCancelEditing();
    };

    const handleNoColor = _ => {};

    return (
      <div className={classNames(classes.container, classes.noTopPadding)}>
        <Paper className={classes.topLayer}>
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
            <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h6">
                  {staticContent.container.title}
                </Typography>
              </div>

              <FormControlLabel
                control={
                  <React.Fragment>
                    <Input
                      id="containerColor"
                      type="color"
                      defaultValue={inputs.containerColor}
                      className={classes.color}
                      onChange={handleInputChange}
                    />
                    <IconButton aria-label="No Color" onClick={handleNoColor}>
                      <FormatColorResetIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                label={staticContent.container.label.color.text}
              />

              <FormControlLabel
                control={
                  <React.Fragment>
                    <Input
                      id="containerBackground"
                      type="color"
                      defaultValue={inputs.containerBackground}
                      onChange={handleInputChange}
                      className={classes.color}
                    />
                    <IconButton aria-label="No Color" onClick={handleNoColor}>
                      <FormatColorResetIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                label={staticContent.container.label.color.background}
              />
            </div>
            <Divider />

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

              <FormControlLabel
                control={
                  <React.Fragment>
                    <Input
                      id="titleColor"
                      type="color"
                      defaultValue={inputs.titleColor}
                      className={classes.color}
                      onChange={handleInputChange}
                    />{" "}
                    <IconButton aria-label="No Color" onClick={handleNoColor}>
                      <FormatColorResetIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                label={staticContent.title.label.color}
              />
            </div>
            <Divider />

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

              <FormControlLabel
                control={
                  <React.Fragment>
                    <Input
                      id="subTitleColor"
                      type="color"
                      defaultValue={inputs.subTitleColor}
                      onChange={handleInputChange}
                      className={classes.color}
                    />{" "}
                    <IconButton aria-label="No Color" onClick={handleNoColor}>
                      <FormatColorResetIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                label={staticContent.subTitle.label.color}
              />
            </div>
            <Divider />

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
              <FormControlLabel
                control={
                  <React.Fragment>
                    <Input
                      id="lineColor"
                      type="color"
                      defaultValue={inputs.lineColor}
                      onChange={handleInputChange}
                      className={classes.color}
                    />{" "}
                    <IconButton aria-label="No Color" onClick={handleNoColor}>
                      <FormatColorResetIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                label={staticContent.line.label.color}
              />
            </div>
            <Divider />

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

              <FormControlLabel
                control={
                  <React.Fragment>
                    <Input
                      id="bodyColor"
                      type="color"
                      defaultValue={inputs.bodyColor}
                      onChange={handleInputChange}
                      className={classes.color}
                    />{" "}
                    <IconButton aria-label="No Color" onClick={handleNoColor}>
                      <FormatColorResetIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                label={staticContent.body.label.color}
              />
            </div>
            <Divider />

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

              <FormControlLabel
                control={
                  <React.Fragment>
                    <Input
                      id="readMoreColor"
                      type="color"
                      defaultValue={inputs.readMoreColor}
                      onChange={handleInputChange}
                      className={classes.color}
                    />{" "}
                    <IconButton aria-label="No Color" onClick={handleNoColor}>
                      <FormatColorResetIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                label={staticContent.readMore.label.color}
              />
            </div>
          </div>
          <Divider />
          <div className={classes.footer}>
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
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CTitleText);
