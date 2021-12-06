import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { Paper } from "@material-ui/core";

import cssClasses from './StarProfiles.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: '#E5E5E5',
  },
}));

export default function StarProfiles() {
  const classes = useStyles();

  return (
    <Paper style={{backgroundColor: "#E5E5E5"}} variant="outlined" square >
      <p className={cssClasses.star}>Star Profiles</p>
      <Divider />
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              S
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Swaraj Das" secondary="Turtle Investor" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              T
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Taral Sharma" secondary="Bitcoins" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              V
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vijiyant Prateek" secondary="Stock Market Influencer" />
        </ListItem>
      </List>
    </Paper>
  );
}
