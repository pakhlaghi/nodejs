const styles = theme => ({
  root: {
    backgroundImage: "var(--background-image)",
    minHeight: "var(--background-height)",
    height: "var(--background-height)",
    color: theme.palette.secondary.contrastText
  },
  fullHeader: {
    minHeight: "1080px"
  }
});

export default styles;
