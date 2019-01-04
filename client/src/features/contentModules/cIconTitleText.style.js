import red from "@material-ui/core/colors/red";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
    margin: `${theme.spacing.unit * 8}px 0`
  },
  gridList: {
    margin: "0px!important",
    width: "100%",
    textAlign: "center"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing.unit * 4
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    width: 70,
    height: 70
  },
  box: {
    [theme.breakpoints.down("sm")]: {
      margin: `${theme.spacing.unit * 4}px 0`
    }
  }
});

export default styles;
