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
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Typography,
  Paper,
  IconButton,
  Button
} from "@material-ui/core";

const CTitleText = ({ classes, contentData }) => {
  return (
    <div className={classNames(classes.container, classes.noTopPadding)}>
      <Paper className={classes.topLayer}>
      <div className={classes.editHeader}>
      <Typography color="inherit" variant="h6">Edit</Typography>
      <IconButton color="inherit" className={classes.closeIcon}><CloseIcon /></IconButton>      
      </div>
      <Divider />

      <div>
          <div className={classes.paper}>
          <div className={classes.title}>
               <Typography variant="h6">Container</Typography>    
          </div>
           
             
             <FormControlLabel
              value="female"
              control={<Input type="color" value={contentData.color} className={classes.color} />}
              label="Module Text Color"
            />
            
          {/* contentData.background */}        
          <FormControlLabel
              value="female"
              control={<Input type="color" value="#e66465" className={classes.color} />}
              label="Module Background"
            />
        </div>
        <Divider />

        <div className={classes.paper}>
        <div className={classes.title}>
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
            className={classes.pullRight}
          />
        </div>
         
          <FormControl className={classes.input}>
            <InputLabel htmlFor="titleText">Title Text</InputLabel>
            <Input
              id="titleText"
              name="titleText"
              autoFocus
              value={contentData.title.text}
            />
          </FormControl>
          {/* contentData.title.align */}
          <FormControlLabel
              value="female"
              control={<Input type="color" value={contentData.title.color} className={classes.color} />}
              label="Text Color"
            />
           
        </div>
        <Divider />

        <div className={classes.paper}>
        <div className={classes.title}>
            <Typography variant="h6">Sub Title</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={contentData.subTitle.isVisible}
                value="subTitleVisible"
                color="primary"
              />
            }
            label="visible"
            className={classes.pullRight}
          />
        </div>

         <FormControl className={classes.input}>
            <InputLabel htmlFor="subTitleText">Sub Title Text</InputLabel>
            <Input
              id="subTitleText"
              name="subTitleText"
              autoFocus
              value={contentData.subTitle.text}
            />
          </FormControl>
         
          {/* contentData.subTitle.align */}

          <FormControlLabel
              value="female"
              control={<Input type="color" value={contentData.subTitle.color} className={classes.color} />}
              label="Text Color"
            />
        </div>
        <Divider />

        <div className={classes.paper}>
        <div className={classes.title}>
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
            className={classes.pullRight}
          />
        </div>
          
          {/* contentData.line.align  */}

          <FormControl className={classes.input}>
            <InputLabel htmlFor="lineWidth">Line Width</InputLabel>
            <Input
              id="lineWidth"
              name="lineWidth"
              autoFocus
              value={contentData.line.width}
            />
          </FormControl>

          <FormControlLabel
              value="female"
              control={<Input type="color" value={contentData.line.color} className={classes.color} />}
              label="Text Color"
            />
        </div>
        <Divider />

        <div className={classes.paper}>
            <div className={classes.title}>
              <Typography variant="h6">Body</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={contentData.body.isVisible}
                value="bodyVisible"
                color="primary"
              />
            }
            label="visible"
            className={classes.pullRight}
          />
            </div>
          
 <FormControl className={classes.input}>
            <InputLabel htmlFor="bodyText">Body Content</InputLabel>
            <Input
              id="bodyText"
              name="bodyText"
              autoFocus
              value={contentData.body.text}
            />
          </FormControl>
         
          {/* contentData.body.align  */}

          <FormControlLabel
              value="female"
              control={<Input type="color" value={contentData.body.color} className={classes.color} />}
              label="Text Color"
            />
        </div>
        <Divider />

        <div className={classes.paper}>
        <div className={classes.title}>
          <Typography variant="h6">Read More</Typography>  
          <FormControlLabel
            control={
              <Switch
                checked={contentData.readMore.isVisible}
                value="readMoreVisible"
                color="primary"
              />
            }
            label="visible"
            className={classes.pullRight}
          />
        </div>
          
          <FormControl className={classes.input}>
            <InputLabel htmlFor="readMoreText">Read More Text</InputLabel>
            <Input
              id="readMoreText"
              name="readMoreText"
              autoFocus
              value={contentData.readMore.text}
            />
          </FormControl>

          <FormControl className={classes.input}>
            <InputLabel htmlFor="readMoreUrl">Url</InputLabel>
            <Input
              id="readMoreUrl"
              name="bodyText"
              autoFocus
              value={contentData.readMore.url}
            />
          </FormControl>

        
          {/* contentData.readMore.align */}

          <FormControlLabel
              value="female"
              control={<Input type="color" value={contentData.readMore.color} className={classes.color} />}
              label="Text Color"
            />
        </div>
       
      </div>
       <Divider />
       <div className={classes.footer}>
       <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            Cancel
            <CancelIcon className={classes.rightIcon} />
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Apply Changes
            <SaveIcon className={classes.rightIcon} />
          </Button>
       </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(CTitleText);
