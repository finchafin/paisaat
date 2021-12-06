import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import userState from '../../../store/user-state';
import classes from './ShareSomething.module.css';

const ShareSomething = () => {
    const userCTX = useContext(userState);

    let userName = "";
    if(userCTX.user) {
        userName = userCTX.user.name.split(' ')[0];
    }

    return (
        <Paper className={classes.ShareSomething} elevation={3}>
            <div className={classes.top}>
                <Avatar src="/broken-image.jpg" />
                <Link to="/app/home/createpost" className={classes.link}>
                    <Button variant="contained" disableElevation>What's in your mind,  {userName}?</Button>
                </Link>
            </div>
            <div className={classes.bottom}>
                Share Your Todays Taughts on Finance
            </div>
        </Paper>
    );
};

export default ShareSomething;
