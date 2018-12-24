const styles = theme => ({
  footer: {
    width: "100%",
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px`,
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      textAlign: "center",
      flexWrap: "wrap"
    }
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  }
});

export default styles;
