import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import { Divider } from "@material-ui/core";

import UserState from "../../store/user-state";
import Navlink from "./NavLink/Navlink";
import cssClasses from "./MenuAppBar.module.css";
import logo from "../assets/logo.jpeg";

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
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const userCTX = useContext(UserState);

  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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

  const logoutHandler = () => {
    userCTX.onLogout();
    history.replace("/");
  };

  let userName;
  let isAuthenticated = userCTX.isAuthenticated;

  if (userCTX.user) {
    if (userCTX.user.name) {
      userName = userCTX.user.name;
    }
  }

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
      {/* <MenuItem onClick={handleMenuClose}>Settings</MenuItem> */}

      <MenuItem onClick={handleMenuClose}>
        {userName ? (
          <NavLink to="/app/profile" style={{ textDecoration: "none" }}>
            {userName.split(" ")[0]}
          </NavLink>
        ) : (
          <NavLink to="/signin" style={{ textDecoration: "none" }}>
            Signin
          </NavLink>
        )}
      </MenuItem>
      <Divider style={{ height: "2px" }} />
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/app/settings" style={{ textDecoration: "none" }}>
          Settings
        </NavLink>
      </MenuItem>
      <Divider style={{ height: "2px" }} />
      <MenuItem onClick={logoutHandler}>
        {/* <NavLink to="/" style={{ textDecoration: "none" }}>
          Logout
        </NavLink> */}
        Logout
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
      {isAuthenticated ? (
        <>          
          <MenuItem style={{ backgroundColor: "#4280c7" }}>
            <Navlink link="/app/settings"> Settings </Navlink>
          </MenuItem>
          <MenuItem style={{ backgroundColor: "#4280c7" }}>
            <Navlink link="/app/about"> Logout </Navlink>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem style={{ backgroundColor: "#4280c7" }}>
            <Navlink link="/app/courses"> Courses </Navlink>
          </MenuItem>
          <MenuItem style={{ backgroundColor: "#4280c7" }}>
            <Navlink link="/app/about"> About Us </Navlink>
          </MenuItem>
          <MenuItem style={{ backgroundColor: "#4280c7" }}>
            <Navlink link="/signin"> Signin </Navlink>
          </MenuItem>
          <MenuItem style={{ backgroundColor: "#4280c7" }}>
            <Navlink link="/signup"> Signup </Navlink>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <div className={`${classes.grow} ${cssClasses.appbar}`}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#4280c7" }}
        className={cssClasses.contentPadding}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img className={cssClasses.logoImg} src={logo} alt="logo" />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link
              to="/app/home"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Paisaat
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Navlink link="/app/trending">Trending</Navlink>
            <Navlink link="/app/courses">Courses</Navlink>
            <Navlink link="/app/about">About Us</Navlink>

            {isAuthenticated ? (
              <>
                <Navlink link={isAuthenticated ? "/app/home" : "/signin"}>
                  <HomeIcon />
                </Navlink>
                <Navlink link="/app/search">
                  <SearchIcon />
                </Navlink>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : (
              <>
                <Navlink link="/signin">
                  <button className={cssClasses.signinbtn}>Signin</button>
                </Navlink>
                <Navlink link="/signup">
                  <button className={cssClasses.signupbtn}>Signup</button>
                </Navlink>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
