import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';


// needs some props set
function HostPause(props) {


  const next = () => {
    console.log("continuing the game");
    props.next();

  }

  const playerScoreItems = (scoreObj) => {

    let sortable = [];

    for(var name in scoreObj){
      sortable.push([ name, scoreObj[name]]);
    }

    sortable.sort(function(a, b) {
      return b[1] - a[1];
    });

    const items = sortable.map((item, index) => {
      return(
        <h3 key={index} > {index+1} : {item[0]} : {item[1]} </h3>
      );
    });
    return(items);
  }

    return (
      <Grid>
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <h2>Take Break</h2>
                {playerScoreItems(props.scores)}
                <Button variant="contained" onClick={next}>Next</Button>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    );
}

export default HostPause;
