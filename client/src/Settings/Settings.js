import { NavLink } from 'react-router-dom'
import { Button, Container, Divider, Grid } from "@material-ui/core";

import cssClasses from './Settings.module.css';

const Settings = () => {
  return (
    <Container>
      <p className={cssClasses.heading} >General Account Settings</p>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          Name
        </Grid>
        <Grid item xs={6}>
          Swaraj Das
        </Grid>
        <Grid item xs={2}>
          Edit
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          Email
        </Grid>
        <Grid item xs={6}>
          swaraj@gmail.com
        </Grid>
        <Grid item xs={2}>
          Edit
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          Contact
        </Grid>
        <Grid item xs={6}>
          +91 7291836485
        </Grid>
        <Grid item xs={2}>
          Edit
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          Age
        </Grid>
        <Grid item xs={6}>
         You have not set your Age.
        </Grid>
        <Grid item xs={2}>
          Edit
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          Gender
        </Grid>
        <Grid item xs={6}>
        You have not set your Gender.
        </Grid>
        <Grid item xs={2}>
          Edit
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <NavLink to="/" style={{textDecoration: 'none'}}>
        <Button variant="outlined" style={{margin: '20px auto'}} >Logout</Button>
      </NavLink>
    </Container>
  );
};

export default Settings;
