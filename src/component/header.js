import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

class Header extends Component {
  render(){
  return (
    <div className="Header">

        <p>
          Aaron Whang's Portfolio
        </p>
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="left"
        >
          <Grid container item xs={4} spacing={0} justify="center">
              <a href="#" onClick={() => this.props.home()}>About me</a>

          </Grid>
          <Grid container item xs={4} spacing={0} justify="center">

              <a href="#" onClick={() => this.props.projects()}>Projects</a>

          </Grid>
          <Grid container item xs={4} spacing={0} justify="center">

              <a href="#" onClick={() => this.props.contacts()}>Contact</a>
          </Grid>
        </Grid>


    </div>
  );
}
}

export default Header;
