import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function Buddies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" >
        <ListItem button>
          <ListItemText primary="Jimmy" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Taral Sharma" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Vijayant Pathak" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sugam Jaiswal" />
        </ListItem>
      </List>
    </div>
  );
}
