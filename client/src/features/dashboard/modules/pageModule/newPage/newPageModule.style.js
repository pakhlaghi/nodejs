import blueGrey from "@material-ui/core/colors/blueGrey";

const styles = theme => ({
  pageContainer: {
    position: "relative",
    padding: "10px 0"
  },
  center: {
    textAlign: "center"
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
      zIndex: "10000"
    }
  },
  moving: {
    "&::before": {
      content: `''`,
      backgroundColor: theme.palette.primary.main,
      background: "url(./assets/images/control_camera.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "7%",
      opacity: "0.7",
      display: "block",
      height: "calc(100% - 45px)",
      position: "absolute",
      top: "45px",
      left: "0",
      width: "100%",
      zIndex: "10000"
    }
  },
  emptyButton: {
    margin: theme.spacing.unit * 10
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  fullWidth: { width: "100%" }
});

export default styles;
