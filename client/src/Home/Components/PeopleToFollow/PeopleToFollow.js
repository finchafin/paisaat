import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Buddies from './Buddies/Buddies';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: '#086cdf',
  },
}));

const PeopleToFollow = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <h3>People to follow</h3>
      <Buddies />
    </Paper>
  );
};

export default PeopleToFollow;
