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
      background: `linear-gradient(6deg, var(--background-color) calc(50% - 2px), ${
        theme.palette.secondary.main
      } calc(50%), var(--background-color) calc(50% + 2px)) !important`
    }
  }
});

const CCColorPicker = props => {
  const { classes, id, value, label, defaultColor, handleInputChange, handleNoColor } = props;

  return (
    <FormControlLabel
      control={
        <React.Fragment>
          <Input
            id={id}
            type="color"
            value={value}
            className={`${classes.color} ${value == "" && classes.noColor}`}
            style={defaultColor ? {
              '--background-color': defaultColor,
            } : {
            '--background-color': "black",
          }}
            onInput={handleInputChange}
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
