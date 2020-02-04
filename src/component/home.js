import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../App.css';

function Home() {

  let checkers = []
  let color = "even"
  let stuff = ""
  for (let i = 1; i <= 120; i++) {
      if(i % 2 === 1) color = "odd"
      if(i % 2 === 0) color = "even"

    let stuff = "element element-"+ i + " " + color
    checkers.push(<div class={stuff}>{i}</div>)
  }
  return (
    <div id="table">

          <div class="bar">  </div>
          <div class="title"> Aaron Whang </div>
          <div class="logo"> </div>
          <div class="info"> </div>
          <div class="skills"> </div>


    </div>
  );
}

export default Home;
