import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Details from "./Components/Details/details";
import Posts from "./Containers/Posts/Posts";
import jerry from "../static/images/user.jpg";
import UserState from "../store/user-state";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "250px",
    margin: "20px 0",
  },
  button: {
    backgroundColor: "#086cdf",
    color: "#fff",
    margin: "20px 5px",
    width: "200px",
  },
}));

export default function Profile() {
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [isfollowing, setIsFollowing] = useState(false);

  const classes = useStyles();
  const userCTX = useContext(UserState);
  const user = userCTX.user;
  const params = useParams();
  localStorage.setItem("searchid", params.userid);

  useEffect(() => {
    fetch(`/userDetails/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFollowers(data.followers.length);
        setFollowing(data.following.length);
        setBio(data.bio);
        if (data.followers.includes(user._id)) {
          setIsFollowing(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const followBtnClickHandler = () => {
    fetch("/addfollowing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id, follow: params.userid }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "Done") {
          setIsFollowing((prevState) => !prevState);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <img
            style={{
              height: "200px",
              width: "200px",
              margin: "1%",
              border: "2px solid #2BAE66",
              borderRadius: "20px",
            }}
            src={jerry}
            alt="profile"
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={followBtnClickHandler}
            >
              {!isfollowing ? "UnFollow" : "Follow"}
            </Button>
          </div>
          <Details
            followers={followers}
            following={following}
            bio={bio}
          />
        </Grid>
        <Grid item sm={8} xs={12}>
          <Posts userid={params.userid} />
        </Grid>
      </Grid>
    </Container>
  );
}
