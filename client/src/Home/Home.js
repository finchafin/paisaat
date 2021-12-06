import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import Posts from "./Containers/Posts/Posts";
import Trending from "./Components/Trending/Trending.js";
import PeopleToFollow from "./Components/PeopleToFollow/PeopleToFollow";
import ShareSomething from "./Components/ShareSomething/ShareSomething";
import MarketNews from "./Components/MarketNews/MarketNews";
import Dictonary from "./Components/Dictonary/Dictonary";

export default function Home() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item xs={3}>
            <Trending />
            <br />
            <PeopleToFollow />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={6} style={{width: '100%'}} >
          <Grid item xs={12} container justify="center">
            <ShareSomething />
          </Grid>
          <Grid item xs={12}>
            <div>
              <Posts />
            </div>
          </Grid>
        </Grid>

        <Hidden smDown>
          <Grid item md={3}>
            <MarketNews />
          </Grid>
        </Hidden>
      </Grid>
      <Dictonary />
    </Container>
  );
}
