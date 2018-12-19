const styles = theme => ({
  container: {
    marginTop: "auto",
    marginTop: theme.spacing.unit * 8,
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
    display: "flex"
  },
  box: {
    width: "50%",
    padding: theme.spacing.unit * 8,
    textAlign: "left"
  },
  hr: {
    backgroundColor: theme.palette.secondary.contrastText,
    width: "78px",
    height: "3px",
    margin: "35px 0"
  }
});

export default styles;
