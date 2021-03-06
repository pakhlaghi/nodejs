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
import EditIcon from "@material-ui/icons/Edit";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

// content modules
import CTitleText from "../../../../contentModules/cTitleText";
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
    CTitleText: CTitleText,
    CImageText: CImageText,
    CImageTile: CImageTile,
    CIconTitleText: CIconTitleText,
    CHeader: CHeader,
    CFooter: CFooter
  };

  const handleAddTopClick = moduleId => _ => {
    newPageHandler.openAddModuleModalAsync(moduleId, "top");
  };

  const handleAddBottomClick = moduleId => _ => {
    newPageHandler.openAddModuleModalAsync(moduleId, "bottom");
  };

  const handleVisibleClick = (moduleId, status) => _ => {
    newPageHandler.toggleModuleVisibility(moduleId, status);
  };

  const handleTrashClick = moduleId => _ => {
    newPageHandler.moveToTrash(moduleId);
  };

  const handleEditClick = moduleId => _ => {
    newPageHandler.editModule(moduleId);
  };

  const handleMoveClick = moduleId => _ => {
    newPageHandler.moveModule(moduleId);
  };

  const handleMoveToClick = (moduleId, to) => _ => {
    // up negative id, bottom positive
    moduleId = to == "up" ? -1 * moduleId : moduleId;
    newPageHandler.moveToModule(moduleId, enqueueSnackbar);
  };

  return (
    <div>
      <NewPageHeader
        enqueueSnackbar={enqueueSnackbar}
        history={history}
        title={newPageSt.page.title}
        action={newPageSt.page.action}
        form={newPageSt.form}
        isCancelModalOpen={newPageSt.isCancelModalOpen}
        toggleCancelModal={newPageHandler.toggleCancelModal}
        savePageAsync={newPageHandler.savePageAsync}
        updateHeaderInputs={newPageHandler.updateHeaderInputs}
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
                <IconButton
                  color={module.isMoving ? "primary" : "default"}
                  onClick={handleMoveClick(module.id)}
                >
                  <ControlCameraIcon />
                </IconButton>
                {newPageSt.isAnyModuleMoving && !module.isMoving && (
                  <React.Fragment>
                    <IconButton
                      color="secondary"
                      onClick={handleMoveToClick(module.id, "down")}
                    >
                      <ArrowDownwardIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={handleMoveToClick(module.id, "up")}
                    >
                      <ArrowUpwardIcon />
                    </IconButton>
                  </React.Fragment>
                )}

                {!newPageSt.isAnyModuleMoving && (
                  <React.Fragment>
                    <IconButton onClick={handleAddBottomClick(module.id)}>
                      <LibraryAddIcon />
                    </IconButton>
                    <IconButton onClick={handleAddTopClick(module.id)}>
                      <LibraryAddIcon className={classes.rotate} />
                    </IconButton>
                    {module.visible ? (
                      <IconButton
                        onClick={handleVisibleClick(module.id, false)}
                      >
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
                    <IconButton onClick={handleEditClick(module.id)}>
                      <EditIcon />
                    </IconButton>
                  </React.Fragment>
                )}
                <Paper
                  className={`${classes.module} ${classes.overlayer} ${
                    module.visible ? "" : classes.invisible
                  } ${module.isMoving ? classes.moving : ""}`}
                >
                  {React.createElement(componentMap[module.type], {
                    contentData: module.contents,
                    handleApplyChanges: newPageHandler.handleApplyChanges,
                    handleCancelEditing: newPageHandler.handleCancelEditing
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
        removeModule={newPageHandler.removeModule}
        saveAddModulesModal={newPageHandler.saveAddModulesModal}
        selectedCount={newPageSt.selectedCount}
        addModuleFromList={newPageHandler.addModuleFromList}
        enqueueSnackbar={enqueueSnackbar}
      />
    </div>
  );
};

export default withStyles(styles)(NewPageModule);
