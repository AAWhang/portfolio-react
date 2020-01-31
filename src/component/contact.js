import React from 'react'
import Grid from '@material-ui/core/Grid';

function Contact() {
  return (
    <div className="Header">

        <p>
          Contact:
        </p>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid container item xs={12} spacing={0} justify="center">
              <li>email: <a href="mailto:tlbhibiki@gmail.com">tlbhibiki@gmail.com</a></li>

          </Grid>
          <Grid container item xs={12} spacing={0} justify="center">

              <li>Linkdln: <a href="https://www.linkedin.com/in/aaron-whang/">https://www.linkedin.com/in/aaron-whang/</a></li>

          </Grid>
          <Grid container item xs={12} spacing={0} justify="center">

              <li>Github: <a href="https://github.com/AAWhang">https://github.com/AAWhang</a></li>
          </Grid>
        </Grid>


    </div>
  );
}

export default Contact;
