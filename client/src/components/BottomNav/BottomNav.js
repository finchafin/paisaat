import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from '@material-ui/icons/Search';

import cssClasses from "./BottomNav.module.css";

const useStyles = makeStyles({
  root: {
    width: "99%",
    position: "fixed",
    bottom: 0,
    "z-index": 100,
    display: "none",
  },
  "@media (max-width: 800px)": {
    root: {
      display: "flex",
      "justify-content": "space-around",
    },
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={clsx(classes.root, cssClasses.BottomNav)}
    >
      <Link to="/app/home">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/app/courses">
        <BottomNavigationAction label="Courses" icon={<MenuBookIcon />} />
      </Link>
      <Link to="/app/trending">
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
      </Link>
      <Link to="/app/search">
        <BottomNavigationAction label="About" icon={<SearchIcon />} />
      </Link>
      <Link to="/app/profile">
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </Link>
    </BottomNavigation>
  );
}
