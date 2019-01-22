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
    flexDirection: "column"
  }
});

export default styles;
