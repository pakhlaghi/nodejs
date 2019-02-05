const styles = theme => ({
  footerContainer: {
    width: "100%",
    marginTop: "auto"
  },
  footerContent: {
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
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    margin: "0 5px"
  }
});

export default styles;
