import blueGrey from "@material-ui/core/colors/blueGrey";

const styles = theme => ({
  fullWidth: { width: "100%" },
  overlayer: {
    "&::before": {
      content: `''`,
      display: "block",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      zIndex: "100"
    }
  },
  leftDialogAction: {
    position: "absolute",
    left: "25px"
  },
  badge: {
    top: -2,
    right: 0,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  },
  marginBottom: {
    marginBottom: "20px"
  },
  topZIndex: {
    zIndex: "3000"
  },
  fullHeight: {
    height: "100%"
  }
});

export default styles;
