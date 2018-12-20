import React from "react";
import CCenterTitleText from "../layout/content/cCenterTitleText";
import CImageText from "../layout/content/cImageText";
import CImageTile from "../layout/content/cImageTile";
import CIconTitleText from "../layout/content/CIconTitleText";

const Home = _ => {
  return (
    <React.Fragment>
      <CCenterTitleText />
      <CImageText />
      <CImageTile />
      <CIconTitleText />
    </React.Fragment>
  );
};

export default Home;
