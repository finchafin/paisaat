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



export default function Topics() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" >
        <ListItem button>
          <ListItemText primary="Blockchain" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Finance" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Bubble" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Mutual Funds" />
        </ListItem>
      </List>
    </div>
  );
}
