import { Route, Switch } from "react-router-dom";

import Login from '../LoginSignup/containers/Login/Login';
import Signup from '../LoginSignup/containers/Signup/Signup';
import LoginSignup from "../LoginSignup/LoginSignup";

const LoginSignupPage = () => {

  return (
    <Switch>
      <Route path="/loginsignup" exact>
        <LoginSignup />
      </Route>
      <Route path="/loginsignup/login/:err">
        <Login />
      </Route>
      <Route path="/loginsignup/signup/:err">
        <Signup />
      </Route>
    </Switch>
  );
};

export default LoginSignupPage;

