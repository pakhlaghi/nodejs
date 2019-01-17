import React from "react";
import { withRouter } from "react-router-dom";

// UI
import { withStyles } from "@material-ui/core/styles";
import styles from "./pagesModule.style";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";

// Utility
import CCEnhancedTable from "../../../../../utility/enhancedTable/ccEnhancedTable";

const PagesModule = props => {
  const { classes, history, pagesSt, pagesHandler } = props;

  const onDelete = selected => {
    console.log(selected);
  };

  const handleToNewPageClick = _ => {
    pagesHandler.linkToNewPage(history);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleToNewPageClick}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Add New Page
        <AddBoxIcon className={classes.rightIcon} />
      </Button>

      <CCEnhancedTable
        data={pagesSt.data}
        fields={pagesSt.fields}
        title={pagesSt.title}
        onDelete={onDelete}
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(withRouter(PagesModule));
