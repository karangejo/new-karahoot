import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';


// needs some props set
function PlayerFinishedGame(props) {


  const doSomething = () => {
    console.log("do Something");

  }

    return (
      <Grid>
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <h2>Game Finished</h2>
                <Button variant="contained" onClick={doSomething}>Do Something</Button>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    );
}

export default PlayerFinishedGame;
