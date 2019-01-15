import blueGrey from "@material-ui/core/colors/blueGrey";

const styles = theme => ({
  pageContainer: {
    position: "relative",
    padding: "10px 0"
  },
  moduleContainer: {
    margin: "20px"
  },
  module: {
    minHeight: "100px"
  },
  rotate: {
    transform: "rotate(180deg)"
  },
  invisible: {
    "&::before": {
      content: `''`,
      backgroundColor: blueGrey[900],
      background: "url(./assets/images/visibility_off.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "10%",
      opacity: "0.9",
      display: "block",
      height: "calc(100% - 45px)",
      position: "absolute",
      top: "45px",
      left: "0",
      width: "100%",
      zIndex: "1000"
    }
  },
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
  }
});

export default styles;
