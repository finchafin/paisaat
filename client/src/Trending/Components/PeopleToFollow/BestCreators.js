import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Buddies from './Buddies/Buddies';
import cssClasses from './PeopleToFollow.module.css';

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

const BestCreators = () => {
  const classes = useStyles();

  return (
    <Paper className={`${classes.paper} ${cssClasses.paper}`}>
      <h3>Visit Star Profiles</h3>
      <Buddies />
    </Paper>
  );
};

export default BestCreators;
