import Typography from "@material-ui/core/Typography";

import Hidden from "@material-ui/core/Hidden";
import Posts from "./Containers/Posts/Posts";
import StarProfiles from "../components/StarProfiles/StarProfiles";
import { Container, Grid } from "@material-ui/core";

const Trending = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        style={{ color: "#086cdf", textAlign: "center", marginBottom: "20px" }}
        component="h1"
        gutterBottom
      >
        Trending
      </Typography>
      <Grid container spacing={4} style={{width: '100%', justifyContent:"center"}}>
        <Hidden smDown>
          <Grid item md={3}></Grid>
        </Hidden>
        <Grid item sm={12} md={6} style={{width: '100%', padding: 0}} >
          <Posts />
        </Grid>
        <Hidden smDown>
          <Grid item sm={3}>
            <StarProfiles />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default Trending;
