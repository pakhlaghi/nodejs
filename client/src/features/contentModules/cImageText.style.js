const styles = theme => ({
  container: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.contrastText
  },
  contentWidth: {
    width: "1080px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    display: "flex"
  },
  box: {
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    padding: theme.spacing.unit * 8,
    textAlign: "left"
  },
  hr: {
    backgroundColor: theme.palette.secondary.contrastText,
    width: "78px",
    height: "3px",
    margin: "35px 0"
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "60%"
    }
  },
  imageBox: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  }
});

export default styles;
