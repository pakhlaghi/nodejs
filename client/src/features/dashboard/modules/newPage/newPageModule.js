import React from "react";
import Draggable from "react-draggable";

// components
import NewPageAddModules from "./newPageAddModules";
import NewPageHeader from "./newPageHeader";
// UI
import styles from "./newPageModule.style";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import IconButton from "@material-ui/core/IconButton";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SettingsIcon from "@material-ui/icons/Settings";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";

// content modules
import CCenterTitleText from "./../../../contentModules/cCenterTitleText";
import CImageText from "./../../../contentModules/cImageText";
import CImageTile from "./../../../contentModules/cImageTile";
import CIconTitleText from "./../../../contentModules/CIconTitleText";
import CHeader from "./../../../contentModules/header/cHeader";
import CFooter from "./../../../contentModules/cFooter";

const NewPageModule = props => {
  const {
    classes,
    enqueueSnackbar,
    history,
    newPageSt,
    newPageHandler
  } = props;

  const componentMap = {
    CCenterTitleText: CCenterTitleText,
    CImageText: CImageText,
    CImageTile: CImageTile,
    CIconTitleText: CIconTitleText,
    CHeader: CHeader,
    CFooter: CFooter
  };

  const handleAddTopClick = index => _ => {
    console.log("add top");
    newPageHandler.addModuleTop(index);
  };

  const handleAddBottomClick = index => _ => {
    console.log("add Bottom");
    newPageHandler.addModuleBottom(index);
  };

  const handleVisibleClick = (index, status) => _ => {
    console.log("visible");
    newPageHandler.toggleVisibility(index, status);
  };

  const handleTrashClick = index => _ => {
    console.log("Trash");
    newPageHandler.moveToTrash(index);
  };

  const handleSettingClick = index => {
    console.log("Setting");
    newPageHandler.moduleSetting(index);
  };

  return (
    <div>
      <NewPageHeader
        enqueueSnackbar={enqueueSnackbar}
        history={history}
        title={newPageSt.page.title}
        action={newPageSt.page.action}
        isCancelModalOpen={newPageSt.isCancelModalOpen}
        toggleCancelModal={newPageHandler.toggleCancelModal}
        savePageAsync={newPageHandler.savePageAsync}
      />

      <Paper className={classes.pageContainer}>
        {newPageSt.page.modules.map((module, index) => (
          <Draggable key={index} bounds="parent" axis="y" handle=".handle">
            <div className={classes.moduleContainer}>
              <span className="handle">
                <IconButton>
                  <ControlCameraIcon />
                </IconButton>
              </span>
              <IconButton onClick={handleAddBottomClick(index)}>
                <LibraryAddIcon />
              </IconButton>
              <IconButton onClick={handleAddTopClick(index)}>
                <LibraryAddIcon className={classes.rotate} />
              </IconButton>
              {module.visible ? (
                <IconButton onClick={handleVisibleClick(index, false)}>
                  <VisibilityIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleVisibleClick(index, true)}>
                  <VisibilityOffIcon />
                </IconButton>
              )}

              <IconButton onClick={handleTrashClick(index)}>
                <DeleteForeverIcon />
              </IconButton>
              <IconButton onClick={handleSettingClick}>
                <SettingsIcon />
              </IconButton>
              <Paper
                className={`${classes.module} ${
                  module.visible ? "" : classes.invisible
                }`}
              >
                {React.createElement(componentMap[module.type], {
                  contentData: module.contents
                })}
              </Paper>
            </div>
          </Draggable>
        ))}
      </Paper>

      <NewPageAddModules
        isAddModulesOpen={newPageSt.isAddModulesOpen}
        toggleAddModulesModal={newPageHandler.toggleAddModulesModal}
        modules={newPageSt.page.modules}
      />
    </div>
  );
};

export default withStyles(styles)(NewPageModule);
