import React from "react";
// Util
import CCMaterialIcon from "../../utility/ccMaterialIcon";
// UI
import styles from "./cFooter.style";
import { withStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import CFooterEdit from "./cFooterEdit";

const CFooter = props => {
  // props
  const {
    classes,
    contentData,
    handleApplyChanges,
    handleCancelEditing
  } = props;

  return (
    <React.Fragment>
      <section className={classes.footerContainer} style={contentData.style}>
        <div className={classes.footerContent}>
          <Typography variant="subheading" color="inherit">
            {contentData.text}
            {contentData.term.text && (
              <React.Fragment>
                |
                <a
                  href={contentData.term.url}
                  className={classes.link}
                  style={{ color: contentData.style.color }}
                >
                  {contentData.term.text}
                </a>
              </React.Fragment>
            )}
          </Typography>
          <div>
            {contentData.socialData.map(social => (
              <IconButton
                key={social.id}
                href={social.url}
                color="inherit"
                className={classes.button}
              >
                <CCMaterialIcon icon={social.icon} />
              </IconButton>
            ))}
          </div>
        </div>
      </section>
      {contentData.isEditing && (
        <CFooterEdit
          contentData={contentData}
          handleApplyChanges={handleApplyChanges}
          handleCancelEditing={handleCancelEditing}
        />
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(CFooter);
