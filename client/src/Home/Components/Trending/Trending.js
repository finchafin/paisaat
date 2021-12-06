import React from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const paper = {
    color: '#086cdf'
  };

const trends = ["#Paisaat", "#CryptoCurrency", "#Share market"];

const Trending = () => {
  const classes = useStyles();

  const trendingList = trends.map((trend, index) => {
    return (
      <ListItem button key={index}> 
        <ListItemText primary={trend} />
      </ListItem>
    );
  });

  return (
    <Paper style={paper} className={classes.paper}>
      <h3>Trending</h3>
      {trendingList}
      <Link to="/app/trending">
        <h4 style={{ color: "#086cdf" }}>See more...</h4>
      </Link>
    </Paper>
  );
};

export default Trending;
