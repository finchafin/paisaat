import React, { useContext, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";

import Bio from "./Components/Bio/Bio";
import Buddies from "./Components/Buddies";
import Topics from "./Components/Topics";
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
  },
}));

export default function Profile() {

  const [bio, setBio] = useState("");
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);

  const classes = useStyles();
  const userCTX = useContext(UserState);
  const user = userCTX.user;

  useEffect(() => {
    fetch(`/userDetails/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFollower(data.followers.length);
        setFollowing(data.following.length);
        setBio(data.bio);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs>
          <Bio
            name={user ? user.name : ""}
            email={user ? user.email : ""}
            bio={bio}
            updateBio={(text) => setBio(text)}
          />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              height: "50%",
              width: "50%",
              margin: "1%",
              border: "2px solid #086cdf",
              borderRadius: "20px",
            }}
            src={jerry}
            alt="profile"
          />
          <br />
          <Hidden smDown>
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper
                  className={classes.paper}
                  style={{
                    color: "#086cdf",
                    fontSize: "1rem",
                    backgroundColor: "#FCF6F5",
                  }}
                >
                  <h4>Followers</h4>
                  {follower}
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  className={classes.paper}
                  style={{
                    color: "#086cdf",
                    fontSize: "1rem",
                    backgroundColor: "#FCF6F5",
                  }}
                >
                  <h4>Following</h4>
                  {following}
                </Paper>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs>
          <Paper style={prof} className={classes.paper}>
            Financial Buddies
            <Buddies></Buddies>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: "0%" }}>
        <Grid item xs>
          <Paper style={prof} className={classes.paper}>
            <h3>Topics/pages "name" follows</h3>
            <Topics></Topics>
          </Paper>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Posts />
        </Grid>
      </Grid>
    </Container>
  );
}
const prof = {
  border: "1px solid #086cdf",
  backgroundColor: "#FCF6F5",
  color: "#086cdf",
};
