import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Alerts from "../Alert/Alert";
import Logo from "../../components/Logo/Paisaat";
import moneyimg from "../assets/moneyplant.jpg";
import useInput from "../hooks/use-input";
import userState from "../../store/user-state";
import cssClasses from "./Signup.module.css";

const Signup = () => {
  const userCTX = useContext(userState);
  const history = useHistory();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Got some error from the response of the user hhh');

  const {
    value: enteredName,
    hasError: nameError,
    isValid: nameIsValid,
    valueChangedHandler: nameChangreHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((val) => val.trim() !== "");

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
  } = useInput((val) => val.length > 6);

  const {
    value: reenteredPassword,
    hasError: reEnteredPasswordError,
    isValid: reEnteredPasswordIsValid,
    valueChangedHandler: reENteredPasswordChangeHandler,
    inputBlurHandler: reEnteredPasswordBlurHandler,
  } = useInput((val) => val === enteredPassword);

  // State for agree check
  const [checked, setChecked] = React.useState(false);

  //HAndling event checked Handler
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Form submitting Handler
  const submitFormHandler = (e) => {
    e.preventDefault();

    // Making every state touched
    nameBlurHandler();
    emailBlurHandler();
    passwordBlurHandler();
    reEnteredPasswordBlurHandler();

    // Checking for input validity
    if (
      nameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      reEnteredPasswordIsValid
    ) {
      if (checked) {
        // Making a post request to the server
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res._id) {
              userCTX.onLogin(res);
              console.log(res);
              localStorage.setItem("username", res.name);
              localStorage.setItem("useremail", res.email);
              localStorage.setItem("userID", res._id);
              history.push("/app/home");
            }
            if (res.msg) {
              console.log("Directing to error signup for", res.msg);
              // history.push(`/loginsignup/signup/${res.msg}`);
              setError(true);
              setErrorMessage(res.msg);
            }
          })
          .catch((err) => {
            console.log("got err");
            console.log(err);

            // for a 400 error direct to an error page
            // history.push("/error");
          });
      }

      return;
    } else {
      console.log("some input is wrong");
      setError(true);
      setErrorMessage("Confirm the privacy Policy");
    }

    setError(true);
    setErrorMessage("Please fill all the inputs");
  };

  const closeErrorHandler = () => {
    setError(false);
  };

  // Setting up errors for incorrect inputs
  let emailErrorMsg = "";
  let nameErrorMsg = "";
  let passwordErrorMsg = "";
  let reEnteredPasswordErrorMsg = "";

  if(emailError){
    emailErrorMsg = "Please enter a valid email";
  }

  if(nameError){
    nameErrorMsg = "Please enter a name to represent you";
  }

  if(passwordHasError) {
    passwordErrorMsg = "Password has to be at least 7 characters";
  }

  if(reEnteredPasswordError){
    reEnteredPasswordErrorMsg = "Password didn't match";
  }


  return (
    <div className={cssClasses.signin}>
      <div className={cssClasses.left}>
        <img className={cssClasses.bgimg} src={moneyimg} alt="moneyplant" />
      </div>
      <div className={cssClasses.right}>
        <div className={cssClasses.content}>
          <Logo className={cssClasses.logo} />
          <p className={cssClasses.connect}>Connect With Us!</p>
          <Alerts msg={errorMessage} showError={error} closeError={closeErrorHandler} />
          <form
            onSubmit={submitFormHandler}
            className={cssClasses.form}
            noValidate
            autoComplete="off"
          >
            <TextField
              className={cssClasses.input}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ margin: "20px 0 0 0" }}
              value={enteredName}
              onChange={nameChangreHandler}
              onBlur={nameBlurHandler}
              error={nameError}
              helperText={nameErrorMsg}
              required
            />
            <TextField
              className={cssClasses.input}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ margin: "7px 0 0 0" }}
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailError}
              helperText={emailErrorMsg}
            />
            <TextField
              name="password"
              className={cssClasses.input}
              label="Password"
              type="password"
              variant="outlined"
              style={{ margin: "7px 0 0 0" }}
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={passwordErrorMsg}
              required
            />
            <TextField
              name="repassword"
              className={cssClasses.input}
              label="Re-type Password"
              type="password"
              variant="outlined"
              style={{ margin: "7px 0 0 0" }}
              value={reenteredPassword}
              onChange={reENteredPasswordChangeHandler}
              onBlur={reEnteredPasswordBlurHandler}
              error={reEnteredPasswordError}
              helperText={reEnteredPasswordErrorMsg}
              required
            />
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        style={{color: '#fff'}}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    }
                    label="I agree to all of terms of use and PRIVACY"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            <button className={cssClasses.signinbtn}>Sign Up</button>
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <p className={cssClasses.change}>
                Already have an account?
                <span className={cssClasses.bold}>Sign In</span>
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
