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
      alignItems="center"
    >
    {port.map((x) => {
      return (
        <Grid container item xs={3} spacing={0} justify="center">
        <div class="cell">
          <ul>
            <li>{x.title} </li>
            <li>{x.link} </li>
            <li> {x.img} </li>
            <li> {x.desc} </li>
            <li>{x.demo} </li>
          </ul>
        </div>
        </Grid>
      )
    })}
    </Grid>


    </div>
  );
}

export default Portfolio;
