import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Alert from "./Alert/Alert";
import useInput from "../../../hooks/use-input";
import cssClasses from "./Contactus.module.css";
import { useState } from "react";

const ContactUs = () => {
  const {
    value: enteredName,
    hasError: nameError,
    isValid: nameIsValid,
    valueChangedHandler: nameChangreHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailError,
    isValid: emailIsValid,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail
  } = useInput((val) => val.includes("@"));

  const {
    value: enteredPhoneno,
    hasError: phonenoError,
    isValid: phoneIsValid,
    valueChangedHandler: phonenoChangeHandler,
    inputBlurHandler: phonenoBlurHandler,
    resetInput: resetPhone
  } = useInput((val) => val.length === 10);

  const {
    value: enteredMsg,
    hasError: msgError,
    isValid: msgIsValid,
    valueChangedHandler: msgChangeHandler,
    inputBlurHandler: msgBlurHandler,
    resetInput: resetMsg
  } = useInput((val) => val.trim() !== "");


  const [successAlert,changeSuccessAlert] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();

    //Making every input touched
    nameBlurHandler();
    emailBlurHandler();
    phonenoBlurHandler();
    msgBlurHandler();

    if (nameIsValid && emailIsValid && phoneIsValid && msgIsValid) {

      fetch("/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          phone: enteredPhoneno,
          msg: enteredMsg,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          changeSuccessAlert(true);
          resetEmail();
          resetMsg();
          resetName();
          resetPhone();
        })
        .catch((err) => {
          console.log(err);
        });

      return;
    }

    console.log("Invalid Inputs");
  };

  return (
    <div className={cssClasses.contactus}>
      <h5 className={cssClasses.header}>Contact Us</h5>
        <Alert show={successAlert} />
      <Paper elevation={2} style={{ backgroundColor: "#fff", width: "340px" }}>
        <form
          className={cssClasses.form}
          onSubmit={submitFormHandler}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={cssClasses.input}
            id="standard-basic"
            label="Name"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangreHandler}
            error={nameError}
            required
          />
          <TextField
            className={cssClasses.input}
            id="standard-basic"
            label="Email"
            value={enteredEmail}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            error={emailError}
            required
          />
          <TextField
            className={cssClasses.input}
            id="standard-basic"
            label="Phone Number"
            type="number"
            value={enteredPhoneno}
            onBlur={phonenoBlurHandler}
            onChange={phonenoChangeHandler}
            error={phonenoError}
            required
          />
          <TextField
            className={cssClasses.input}
            id="standard-basic"
            label="Message"
            value={enteredMsg}
            onBlur={msgBlurHandler}
            onChange={msgChangeHandler}
            error={msgError}
            required
          />
          <Button
            className={cssClasses.submitbtn}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ContactUs;
