const styles = theme => ({
  footer: {
    width: "100%",
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px`
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  }
});

export default styles;
