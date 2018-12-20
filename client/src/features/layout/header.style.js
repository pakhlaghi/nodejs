const styles = theme => ({
  root: {
    backgroundImage:
      "url(https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg-1.jpg)",
    minHeight: "65px",
    color: theme.palette.secondary.contrastText
  },
  fullHeader: {
    minHeight: "1080px"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  },
  appBar: {
    background: "transparent"
  }
});

export default styles;
