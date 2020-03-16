import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';


// needs some props set
function StartGame(props) {


  const startGame = () => {
    props.startGame();

  }

    return (
      <Grid>
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <h2>{props.gameTitle}</h2>
                <Button variant="contained" onClick={startGame}>Start Game</Button>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    );
}

export default StartGame;
