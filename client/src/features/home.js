import React from "react";
import CCenterTitleText from "./contentModules/cCenterTitleText";
import CImageText from "./contentModules/cImageText";
import CImageTile from "./contentModules/cImageTile";
import CIconTitleText from "./contentModules/CIconTitleText";
import CHeader from "./contentModules/header/cHeader";
import CFooter from "./contentModules/cFooter";

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
