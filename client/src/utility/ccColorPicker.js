import React from "react";
import {
  withStyles,
  Input,
  IconButton,
  FormControlLabel
} from "@material-ui/core";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";
const styles = theme => ({
  color: {
    width: "80px",
    margin: "10px 10px 10px 50px"
  },
  noColor: {
    "& ::-webkit-color-swatch": {
      background: `linear-gradient(6deg, white calc(50% - 1.5px), ${
        theme.palette.secondary.main
      } calc(50%), white calc(50% + 1.5px)) !important`
    }
  }
});

const CCColorPicker = props => {
  const { classes, id, value, label, handleInputChange, handleNoColor } = props;

  return (
    <FormControlLabel
      control={
        <React.Fragment>
          <Input
            id={id}
            type="color"
            defaultValue={value}
            className={`${classes.color} ${!value && classes.noColor}`}
            onChange={handleInputChange}
          />
          <IconButton aria-label="No Color" onClick={handleNoColor(id)}>
            <FormatColorResetIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
      label={label}
    />
  );
};

export default withStyles(styles)(CCColorPicker);
