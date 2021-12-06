import React from "react";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";


import cssClasses from "./Alerts.module.css";

export default function Alerts(props) {

  return (
    <Collapse className={cssClasses.root} in={props.show}>
      <div>
        Thanks For Contacting Us - We'll reach out to you soon!
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          className={cssClasses.closebtn}
          onClick={props.closeError}
        >
        </IconButton>
      </div>
    </Collapse>
  );
}
