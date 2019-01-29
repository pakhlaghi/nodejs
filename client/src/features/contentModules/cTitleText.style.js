const styles = theme => ({
  container: {
    marginTop: "auto",
    padding: `${theme.spacing.unit * 8}px 0`,
    display: "flex",
    justifyContent: "center"
  },
  contentWidth: {
    width: "1080px",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  hr: {
    height: "3px",
    marginTop: "35px",
    marginBottom: "38px"
  },
  paper: {
    padding: "30px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "& h6": {
      marginBottom: "20px"
    }
  },
  topLayer: {
    zIndex: "20000",
    position: "relative",
    width: "90%"
  },
  noTopPadding: {
    paddingTop: "0"
  },
  editHeader: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px 20px",
    color: theme.palette.secondary.contrastText,
    display: "flex"
  },
  closeIcon: {
    padding: "0",
    marginLeft: "auto",
    display: "flex"
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px"
  },
  input: {
    margin: "10px 10px 20px 40px",
    width: "70%"
  },
  title: {
    display: "flex",
    marginBottom: "20px",
    alignSelf: "stretch"
  },
  pullRight: {
    marginLeft: "auto"
  },
  margin: {
    margin: "10px 10px 0px 40px"
  }
});

export default styles;
