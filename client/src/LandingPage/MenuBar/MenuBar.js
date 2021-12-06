import React from "react";
import { NavLink } from "react-router-dom";

import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Navlink from "./NavLink/Navlink";
import cssClasses from "./MenuBar.module.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    "font-family": "Poppins",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    "font-family": "Poppins",
  },
}));

export default function MenuBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/loginsignup" style={{ textDecoration: "none" }}>
          Logout
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem style={{ backgroundColor: "#E5E5E5" }}>
        <Navlink link="/signup"> Home </Navlink>
      </MenuItem>
      <MenuItem style={{ backgroundColor: "#E5E5E5" }}>
        <Navlink link="/app/about"> About Us </Navlink>
      </MenuItem>
      <MenuItem style={{ backgroundColor: "#E5E5E5" }}>
        <Navlink link="/app/courses"> Courses </Navlink>
      </MenuItem>
      <MenuItem style={{ backgroundColor: "#E5E5E5" }}>
        <Navlink link="/app/about"> About Us </Navlink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`${classes.grow} ${cssClasses.appbar}`}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#E5E5E5" }}
        className={cssClasses.contentPadding}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <span className={cssClasses.title}>Paisaat</span>
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Navlink link="/signin">Home</Navlink>
            <Navlink link="#">About Us</Navlink>
            <Navlink link="/app/courses">Courses</Navlink>
            <Navlink link="/app/about">About Us</Navlink>
            <Navlink link="/signin">Signin</Navlink>
            <Navlink link="/signup">
              <button className={cssClasses.signupbtn}>Signup</button>
            </Navlink>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Navlink link="/signin">
              <button className={cssClasses.msignin}>Signin</button>
              </Navlink>
            <Navlink link="/signup">
              <button className={cssClasses.msignup}>Signup</button>
            </Navlink>
              <MoreIcon style={{ color: "#000" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
