import React from 'react'
import port from './portlist'
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import './App.css';

// title: "Title 1",
// link: "Link 1",
// img: "img 1",
// desc: "desc",
// demo: "demoo"
function Portfolio() {
  return (
    <div className="Portfolio">

    <Grid
      container
      direction="row"
      justify="left"
      alignItems="left"
    >
    {port.map((x, y) => {
      return (
        <Grid container item xs={4} spacing={0} justify="center">
        <div class="cell">
          <Grid item xs={12} justify="left">
            <h3>{x.title} </h3>
            <hr />
          </Grid>
          <Grid item xs={12} justify="left">
            <img id="thumbnail" src={x.img} />
            <p> {x.desc} </p>
            <li>{x.link} </li>
            <li>{x.demo} </li>
          </Grid>

        </div>
        </Grid>
      )
    })}
    </Grid>


    </div>
  );
}

export default Portfolio;
