import React from "react";
import CCenterTitleText from "../layout/content/cCenterTitleText";
import CImageText from "../layout/content/cImageText";
import CImageTile from "../layout/content/cImageTile";
import CIconTitleText from "../layout/content/CIconTitleText";

const Home = props => {
  // props
  const { homeSt } = props;

  const componentMap = {
    CCenterTitleText: CCenterTitleText,
    CImageText: CImageText,
    CImageTile: CImageTile,
    CIconTitleText: CIconTitleText
  };

  return (
    <React.Fragment>
      {homeSt.contentData.map(content =>
        React.createElement(componentMap[content.type], {
          contentData: content
        })
      )}
    </React.Fragment>
  );
};

export default Home;
