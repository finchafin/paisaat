import React from "react";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import cssClasses from "./Alert.module.css";

export default function Alerts(props) {
  return (
    <Collapse className={cssClasses.root} in={props.showError}>
      <div>
        {props.msg}
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          className={cssClasses.closebtn}
          onClick={props.closeError}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </div>
    </Collapse>
  );
}
