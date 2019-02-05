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

class CFooterEdit extends React.Component {
  // add state because of radio button
  constructor(props) {
    super(props);
    const { contentData } = props;

    this.state = {
      inputs: {
        styleColor: contentData.style.color,
        styleBackgroundColor: contentData.style.backgroundColor,
        text: contentData.text,
        termText: contentData.term.text,
        termUrl: contentData.term.url,
        socialData: this.mapContentToState(contentData)
      }
    };
  }

  mapContentToState = contentData => {
    return contentData.socialData.map((item, index) => {
      return {
        id: index + 1,
        icon: item.icon,
        url: item.url,
        title: item.title
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
          text: "Copyright Text",
          term: {
            url: "Terms Url",
            text: "Terms Text"
          },
          color: {
            text: "Module Text Color",
            background: "Module Background Color"
          }
        }
      },
      social: {
        title: "Social Icon",
        label: {
          delete: "Delete",
          title: "Title",
          icon: "icon",
          url: "Link to URL"
        }
      },
      footer: {
        button: {
          add: "Add Social Icon",
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
      handleApplyChanges(this.state.inputs, "cFooter");
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

    const handleRemoveClick = index => _ => {
      this.state.inputs.tiles.splice(index, 1);
      this.setState({
        inputs: { ...inputs, tiles: this.state.inputs.tiles }
      });
    };

    const handleAddItemClick = _ => {
      const lastId = this.state.inputs.socialData[
        this.state.inputs.socialData.length - 1
      ].id;
      const emptyObj = {
        id: lastId + 1,
        icon: "",
        url: "",
        title: ""
      };

      this.state.inputs.socialData.push(emptyObj);
      this.setState({
        inputs: { ...inputs, socialData: this.state.inputs.socialData }
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
                id={`text`}
                label={staticContent.container.label.text}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.text}
                onChange={handleInputChange}
              />

              <TextField
                id={`termText`}
                label={staticContent.container.label.term.text}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.termText}
                onChange={handleInputChange}
              />

              <TextField
                id={`termUrl`}
                label={staticContent.container.label.term.url}
                className={classes.input}
                variant="filled"
                defaultValue={inputs.termUrl}
                onChange={handleInputChange}
              />

              <CCColorPicker
                id="styleColor"
                value={inputs.styleColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.container.label.color.text}
              />

              <CCColorPicker
                id="styleBackgroundColor"
                value={inputs.styleBackgroundColor}
                handleInputChange={handleInputChange}
                handleNoColor={handleNoColor}
                label={staticContent.container.label.color.background}
              />
            </div>
            <Divider />

            {/* --Image-- */}
            {inputs.socialData.map((item, index) => (
              <div className={classes.paper} key={item.id}>
                <div className={classes.title}>
                  <Typography variant="h6">
                    {`${index + 1}- ${staticContent.social.title}`}
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
                  id={`url-${index + 1}`}
                  label={staticContent.social.label.url}
                  className={classes.input}
                  variant="filled"
                  defaultValue={item.url}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`icon-${index + 1}`}
                  label={staticContent.social.label.icon}
                  className={classes.input}
                  variant="filled"
                  defaultValue={item.icon}
                  onChange={handleInputChange}
                />

                <TextField
                  id={`imageTitle-${index + 1}`}
                  label={staticContent.social.label.title}
                  className={classes.input}
                  variant="filled"
                  defaultValue={item.title}
                  onChange={handleInputChange}
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
              onClick={handleAddItemClick}
            >
              <AddBoxIcon
                className={classNames(classes.leftIcon, classes.leftIcon)}
              />
              {staticContent.footer.button.add}
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

export default withStyles(styles)(CFooterEdit);
