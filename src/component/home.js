import React from 'react'
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <div className="Home">

        <p>
          Aaron Whang's Portfolio
        </p>
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="left"
        >
          <Grid container item xs={12} spacing={0} justify="center">
              <h1> Welcome! </h1>

          </Grid>
          <Grid container item xs={6} spacing={0} justify="center">

              <p>What is that over there? I see a piece of string cheese. I do wonder if you can make mozzerella sticks by battering and frying string cheese. It seems easy and tasty. </p>

          </Grid>
          <Grid container item xs={6} spacing={0} justify="center">

              <p>This is a placeholder. What is a placeholder? Well it's an element in order to fill out a space and is designed to test the layout with elements that are meant to be replaced. So that means I am dispensable. Life is fleeting.</p>
          </Grid>
        </Grid>


    </div>
  );
}

export default Home;
