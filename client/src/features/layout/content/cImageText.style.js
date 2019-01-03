const styles = theme => ({
  container: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    background: "rgb(253, 29, 78)",
    background:
      "linear-gradient(0deg, rgba(253,29,78,1) 0%, rgba(175,56,13,0.9917717086834734) 100%)",
    minHeight: "400px",
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
    width: "50%",
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
