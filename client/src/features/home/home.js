import React from "react";
import CCenterTitleText from "../layout/content/cCenterTitleText";
import CImageText from "../layout/content/cImageText";
import CImageTile from "../layout/content/cImageTile";
import CIconTitleText from "../layout/content/CIconTitleText";
import CHeader from "../layout/content/header/cHeader";
import CFooter from "../layout/content/cFooter";

const Home = props => {
  // props
  const { homeSt, layoutSt, onToggleDrawer } = props;

  const componentMap = {
    CCenterTitleText: CCenterTitleText,
    CImageText: CImageText,
    CImageTile: CImageTile,
    CIconTitleText: CIconTitleText,
    CHeader: CHeader,
    CFooter: CFooter
  };

  return (
    <React.Fragment>
      {homeSt.contentData.map(moduleContent => {
        let propsObj = {};

        if (moduleContent.type == "CHeader") {
          propsObj = {
            isFullHeader: true,
            isDrawerOpen: layoutSt.isDrawerOpen,
            contentData: moduleContent.contents,
            onToggleDrawer: onToggleDrawer
          };
        } else {
          propsObj = {
            contentData: moduleContent.contents
          };
        }

        return React.createElement(componentMap[moduleContent.type], propsObj);
      })}
    </React.Fragment>
  );
};

export default Home;
