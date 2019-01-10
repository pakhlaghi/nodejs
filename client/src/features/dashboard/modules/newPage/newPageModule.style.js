const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing.unit
  },
  topBar: {
    display: "flex",
    marginBottom: "30px"
  },
  inputMargin: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: "300px"
  },
  rightEnd: {
    marginLeft: "auto"
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  pageContainer: {
    position: "relative",
    padding: "10px 0"
  },
  moduleContainer: {
    margin: "20px"
  },
  module: {
    minHeight: "100px"
  },
  rotate: {
    transform: "rotate(180deg)"
  }
});

export default styles;
