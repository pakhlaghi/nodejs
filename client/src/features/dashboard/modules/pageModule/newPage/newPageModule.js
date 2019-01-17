import React from "react";
import Draggable from "react-draggable";

// components
import NewPageAddModules from "./newPageAddModules";
import NewPageHeader from "./newPageHeader";

// UI
import classNames from "classNames";
import styles from "./newPageModule.style";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SettingsIcon from "@material-ui/icons/Settings";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import AddBoxIcon from "@material-ui/icons/AddBox";

// content modules
import CCenterTitleText from "./../../../../contentModules/cCenterTitleText";
import CImageText from "./../../../../contentModules/cImageText";
import CImageTile from "./../../../../contentModules/cImageTile";
import CIconTitleText from "./../../../../contentModules/CIconTitleText";
import CHeader from "./../../../../contentModules/header/cHeader";
import CFooter from "./../../../../contentModules/cFooter";

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

  const handleAddTopClick = moduleId => _ => {
    console.log("add top");
    newPageHandler.openAddModuleModalAsync(moduleId, "top");
  };

  const handleAddBottomClick = moduleId => _ => {
    console.log("add Bottom");
    newPageHandler.openAddModuleModalAsync(moduleId, "bottom");
  };

  const handleVisibleClick = (moduleId, status) => _ => {
    console.log("visible");
    newPageHandler.toggleModuleVisibility(moduleId, status);
  };

  const handleTrashClick = moduleId => _ => {
    console.log("Trash");
    newPageHandler.moveToTrash(moduleId);
  };

  const handleSettingClick = moduleId => {
    console.log("Setting");
    newPageHandler.moduleSetting(moduleId);
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

      {newPageSt.page.modules && newPageSt.page.modules.length > 0 ? (
        <Paper className={classes.pageContainer}>
          {newPageSt.page.modules.map(module => (
            <Draggable
              key={module.id}
              bounds="parent"
              axis="y"
              handle=".handle"
            >
              <div className={classes.moduleContainer}>
                <span className="handle">
                  <IconButton>
                    <ControlCameraIcon />
                  </IconButton>
                </span>
                <IconButton onClick={handleAddBottomClick(module.id)}>
                  <LibraryAddIcon />
                </IconButton>
                <IconButton onClick={handleAddTopClick(module.id)}>
                  <LibraryAddIcon className={classes.rotate} />
                </IconButton>
                {module.visible ? (
                  <IconButton onClick={handleVisibleClick(module.id, false)}>
                    <VisibilityIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleVisibleClick(module.id, true)}>
                    <VisibilityOffIcon />
                  </IconButton>
                )}

                <IconButton onClick={handleTrashClick(module.id)}>
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
      ) : (
        <Button className={classes.fullWidth} onClick={handleAddTopClick(0)}>
          <Paper
            className={classNames(
              classes.pageContainer,
              classes.fullWidth,
              classes.center
            )}
          >
            <Button
              variant="outlined"
              color="primary"
              size="small"
              className={classes.emptyButton}
            >
              <AddBoxIcon
                className={classNames(classes.leftIcon, classes.leftIcon)}
              />
              Add Modules
            </Button>
          </Paper>
        </Button>
      )}

      <NewPageAddModules
        isAddModulesOpen={newPageSt.isAddModulesOpen}
        toggleAddModulesModal={newPageHandler.toggleAddModulesModal}
        defaultModules={newPageSt.defaultModules}
        modulesToAdd={newPageSt.modulesToAdd}
        saveAddModulesModal={newPageHandler.saveAddModulesModal}
        selectedCount={newPageSt.selectedCount}
        addModuleFromList={newPageHandler.addModuleFromList}
      />
    </div>
  );
};

export default withStyles(styles)(NewPageModule);
