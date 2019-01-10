import React from "react";
import CCEnhancedTable from "../../../utility/enhancedTable/ccEnhancedTable";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import styles from "./pagesModule.style";
import { Link } from "react-router-dom";

const PagesModule = props => {
  const { classes } = props;

  const data = [
    { id: 1, name: "page1" },
    { id: 2, name: "page2" },
    { id: 3, name: "page3" }
  ];

  const fields = [
    { id: "id", numeric: true, disablePadding: false, label: "Page ID" },
    { id: "name", numeric: false, disablePadding: false, label: "Page Name" }
  ];

  const title = "Pages";

  const onDelete = selected => {
    console.log(selected);
  };

  return (
    <React.Fragment>
      <Link to="newPage" className={classes.link}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Add New Page
          <AddBoxIcon className={classes.rightIcon} />
        </Button>
      </Link>

      <CCEnhancedTable
        data={data}
        fields={fields}
        title={title}
        onDelete={onDelete}
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(PagesModule);
