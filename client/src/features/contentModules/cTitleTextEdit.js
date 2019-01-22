import React from "react";
// UI
import styles from "./cTitleText.style";
import { withStyles } from "@material-ui/core/styles";
import {
  Input,
  Divider,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Typography,
  Paper
} from "@material-ui/core";

const CTitleText = ({ classes, contentData }) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWidth}>
        <div className={classes.paper}>
          <Typography variant="h6">Container</Typography>
          <Input type="color" value={contentData.color} />
          {/* contentData.background */}
          <Input type="color" value="#e66465" />
        </div>
        <Divider />

        <div className={classes.paper}>
          <Typography variant="h6">Title</Typography>{" "}
          <FormControlLabel
            control={
              <Switch
                checked={contentData.title.isVisible}
                value="titleVisible"
                color="primary"
              />
            }
            label="visible"
          />
          <FormControl className={classes.inputMargin}>
            <InputLabel htmlFor="titleText">Title Text</InputLabel>
            <Input
              id="titleText"
              name="titleText"
              autoFocus
              value={contentData.title.text}
            />
          </FormControl>
          {/* contentData.title.align */}
          <Input type="color" value={contentData.title.color} />
        </div>
        <Divider />

        <div className={classes.paper}>
          <Typography variant="h6">Sub Title</Typography>
          <FormControl className={classes.inputMargin}>
            <InputLabel htmlFor="subTitleText">Sub Title Text</InputLabel>
            <Input
              id="subTitleText"
              name="subTitleText"
              autoFocus
              value={contentData.subTitle.text}
            />
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={contentData.subTitle.isVisible}
                value="subTitleVisible"
                color="primary"
              />
            }
            label="visible"
          />
          {/* contentData.subTitle.align */}

          <Input type="color" value={contentData.subTitle.color} />
        </div>
        <Divider />

        <div className={classes.paper}>
          <Typography variant="h6">Line</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={contentData.line.isVisible}
                value="lineVisible"
                color="primary"
              />
            }
            label="visible"
          />
          {/* contentData.line.align  */}

          <FormControl className={classes.inputMargin}>
            <InputLabel htmlFor="lineWidth">Line Width</InputLabel>
            <Input
              id="lineWidth"
              name="lineWidth"
              autoFocus
              value={contentData.line.width}
            />
          </FormControl>

          <Input type="color" value={contentData.line.color} />
        </div>
        <Divider />

        <div className={classes.paper}>
          <Typography variant="h6">Body</Typography>
          <FormControl className={classes.inputMargin}>
            <InputLabel htmlFor="bodyText">Body Content</InputLabel>
            <Input
              id="bodyText"
              name="bodyText"
              autoFocus
              value={contentData.body.text}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                checked={contentData.body.isVisible}
                value="bodyVisible"
                color="primary"
              />
            }
            label="visible"
          />
          {/* contentData.body.align  */}

          <Input type="color" value={contentData.body.color} />
        </div>
        <Divider />

        <div className={classes.paper}>
          <Typography variant="h6">Read More</Typography>
          <FormControl className={classes.inputMargin}>
            <InputLabel htmlFor="readMoreText">Read More Text</InputLabel>
            <Input
              id="readMoreText"
              name="readMoreText"
              autoFocus
              value={contentData.readMore.text}
            />
          </FormControl>

          <FormControl className={classes.inputMargin}>
            <InputLabel htmlFor="readMoreUrl">Url</InputLabel>
            <Input
              id="readMoreUrl"
              name="bodyText"
              autoFocus
              value={contentData.readMore.url}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                checked={contentData.readMore.isVisible}
                value="readMoreVisible"
                color="primary"
              />
            }
            label="visible"
          />
          {/* contentData.readMore.align */}

          <Input type="color" value={contentData.readMore.color} />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default withStyles(styles)(CTitleText);
