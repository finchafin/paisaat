import React, { Suspense, useContext, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import MainRoutes from "./routes/mainroutes";
import LandingPage from "./pages/LandingPage";

import Signin from "./LoginSignup/Signin/Signin";
import Signup from "./LoginSignup/Signup/Signup";
import userState from "./store/user-state";

function App() {
  const userCTX = useContext(userState);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const uemail = localStorage.getItem("useremail");
    const uid = localStorage.getItem("userID");
    const uname = localStorage.getItem("username");
    if (!uname || !uid || !uemail) {
      return;
    }
    userCTX.onLogin({ name: uname, email: uemail, _id: uid });
    
    history.push(location.pathname);
    // console.log("Logging in the user");
  }, []);

  return (
    <Suspense
      fallback={
        <div className="loading">
          <LoadingSpinner />
        </div>
      }
    >
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/app">
          <Layout>
            <MainRoutes />
          </Layout>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
