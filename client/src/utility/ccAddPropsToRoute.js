import React from "react";

const CCAddPropsToRoute = (WrappedComponent, passedProps) => {
  return class Route extends React.Component {
    render() {
      const props = { ...this.props, ...passedProps };
      return <WrappedComponent {...props} />;
    }
  };
};

export default CCAddPropsToRoute;
