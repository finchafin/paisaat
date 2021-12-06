import React, { Fragment, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import userState from "../store/user-state";

const Profile = React.lazy(() => import("../pages/Profile"));
const About = React.lazy(() => import("../pages/About"));
const SearchProple = React.lazy(() => import("../pages/SearchPeople"));
const Trending = React.lazy(() => import("../pages/Trending"));
const PeoplesProfile = React.lazy(() =>
  import("../PeoplesProfile/PeoplesProfile")
);
const Courses = React.lazy(() => import("../Cources/Courses"));
const Settings = React.lazy(() => import("../pages/Settings"));

const MainRoutes = () => {
  let userCTX = useContext(userState);
  // console.log("main routes -- isloggedin - ", userCTX.isAuthenticated);
  const isloggedin = userCTX.isAuthenticated;

  return (
    <Fragment>
      <Route path="/app/home">
        {isloggedin ? <Home /> : <Redirect to="/signin" />}
      </Route>
      <Route path="/app/profile">
        {isloggedin ? <Profile /> : <Redirect to="/signin" />}
      </Route>
      <Route path="/app/peoplesprofile/:userid">
        <PeoplesProfile />
      </Route>
      <Route path="/app/courses">
        <Courses />
      </Route>
      <Route path="/app/about">
        <About />
      </Route>
      <Route path="/app/search">
        <SearchProple />
      </Route>
      <Route path="/app/trending">
        <Trending />
      </Route>
      {isloggedin ? (
        <Route path="/app/settings">
          <Settings />
        </Route>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default MainRoutes;
