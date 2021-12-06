import React, { useState, useContext } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Alerts from "../Alert/Alert";
import Logo from "../../components/Logo/Paisaat";
import useInput from "../hooks/use-input";
import UserState from "../../store/user-state";
import moneyimg from "../assets/moneyplant.jpg";
import cssClasses from "./Signin.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1, 0, 0, 0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Signin = () => {
  const classes = useStyles();
  const userCTX = useContext(UserState);
  const history = useHistory();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Got some error from the response of the user hhh');

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const {
    value: enteredEmail,
    hasError: emailError,
    isValid: emailIsValid,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((val) => val.includes("@"));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangedHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((val) => val.length > 0);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const passwordChanged = (event) => {
    handleChange(event);
    passwordChangeHandler(event);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    emailBlurHandler();
    passwordBlurHandler();

    if (emailIsValid && passwordIsValid) {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Got response");
          if (res._id) {
            userCTX.onLogin(res);
            localStorage.setItem("username", res.name);
            localStorage.setItem("useremail", res.email);
            localStorage.setItem("userID", res._id);
            history.push("/app/home");
          }
          if (res.msg) {
            // console.log("Directing to login for", res.msg);
            // history.replace(`/loginsignup/login/${res.msg}`);
            setError(true);
            setErrorMessage(res.msg);
          }
        })
        .catch((err) => {
          console.log(err);
          // redirect to an 404 error page
          // history.push('/error')
        });

      return;
    }

    setError(true);
    setErrorMessage("Enter Email and Password")
    console.log("Something went wrong");
  };

  const closeErrorHandler = () => {
    setError(false);
  };


  // Setting up errors for incorrect inputs
  let emailErrorMsg = "";
  if(emailError){
    emailErrorMsg = "Please enter a valid email";
  }

  return (
    <div className={cssClasses.signin}>
      <div className={cssClasses.left}>
        <img className={cssClasses.bgimg} src={moneyimg} alt="moneyplant" />
      </div>
      <div className={cssClasses.right}>
        <div className={cssClasses.content}>
          <Logo className={cssClasses.logo}  />
          <Alerts msg={errorMessage} showError={error} closeError={closeErrorHandler} />
          <form
            onSubmit={formSubmitHandler}
            className={cssClasses.form}
            noValidate
            autoComplete="off"
          >
            <TextField
              className={cssClasses.input}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ margin: "40px 0 0 0" }}
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailError}
              helperText={emailErrorMsg}
            />
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={enteredPassword}
                onChange={passwordChanged}
                error={passwordHasError}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <p className={cssClasses.forgot}>Forgot Password?</p>
            <button className={cssClasses.signinbtn}>Sign In</button>
            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              <p className={cssClasses.change}>
                New User? <span className={cssClasses.bold}> Sign Up</span>
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
