import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Buddies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/60dff5dbce1019852cd0b295">
            <ListItemText primary="Swaraj Das" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/60df27bb5210aa4e68209644">
            <ListItemText primary="Yash Agarwal" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/60e1f439fecdc463d8d003bb">
            <ListItemText primary="Taral Sharma" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/60df112c5210aa4e6820963d">
            <ListItemText primary="Vijiyant Prateek" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
