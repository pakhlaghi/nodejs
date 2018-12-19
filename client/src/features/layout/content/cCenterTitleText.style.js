const styles = theme => ({
  container: {
    marginTop: "auto",
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    justifyContent: "center"
  },
  contentWidth: {
    width: "1080px",
    textAlign: "center"
  },
  hr: {
    backgroundColor: theme.palette.secondary.main,
    width: "78px",
    height: "3px",
    marginTop: "35px",
    marginBottom: "38px"
  }
});

export default styles;
