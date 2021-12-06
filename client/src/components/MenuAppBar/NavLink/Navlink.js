import { NavLink } from "react-router-dom";

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import classes from './Navlink.module.css';

const Navlink = (props) => {
    return (
        <IconButton style={{marginBottom: "9px"}} color="inherit">
          <Badge color="secondary">
            <NavLink to={props.link} className={classes.link} > {props.children} </NavLink>
          </Badge>
        </IconButton>
    );
};

export default Navlink;