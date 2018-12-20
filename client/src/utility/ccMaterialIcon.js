import React from "react";

// task: dynamicaly import material ui icons
// param: icon
const CCMaterialIcon = ({ icon }) => {
  let iconName = icon.replace(/Icon$/, "");
  let resolved;
  try {
    resolved = require(`@material-ui/icons/${iconName}`).default;
  } catch (error) {}

  return resolved ? React.createElement(resolved) : null;
};

export default CCMaterialIcon;
