import { useState, useContext } from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import UserState from "../../../store/user-state";
import cssClassses from "./Bio.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Bio = (props) => {
  const classes = useStyles();
  const [newBio, setNewBio] = useState("");
  const [showForm, setShowForm] = useState(false);
  const userCTX = useContext(UserState);

  const changedBioInput = (e) => {
    setNewBio(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("UPDATING BIO", newBio);
    if (newBio) {
      fetch("/updateBio", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId: userCTX.user._id, bio: newBio }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.msg === "OK") {
            props.updateBio(newBio);
          }
          togglrFormHandler();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const togglrFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <Paper className={classes.paper}>
      <h3>User Details</h3>
      <p style={{ fontSize: "1rem", textAlign: "left" }}>Name : {props.name}</p>
      <p style={{ fontSize: "1rem", textAlign: "left" }}>
        Email : {props.email}
      </p>
      <p style={{ fontSize: "1rem" }}>{props.bio ? props.bio : "ADD YOUR BIO"}</p>
      {showForm && (
        <form
          className={cssClassses.form}
          onSubmit={formSubmitHandler}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={cssClassses.bioInput}
            value={newBio}
            label="Describe Yourself"
            multiline
            rows={2}
            variant="filled"
            onChange={changedBioInput}
          />
          <Button
            className={cssClassses.submitBtn}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Update Bio
          </Button>
        </form>
      )}
      <Button
        className={cssClassses.updateBtn}
        onClick={togglrFormHandler}
        variant="contained"
      >
        {!showForm? 'Update Your Bio' : "Close"}
      </Button>
    </Paper>
  );
};

export default Bio;
