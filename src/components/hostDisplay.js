import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Countdown from 'react-countdown-now';



// needs some props set
function HostDisplay(props) {
  const [game, setGame] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLimit, setTimeLimit] = useState(30);
  const [players, setPlayers] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect((() => {
    console.log(props.game);
    setGame(props.game);
    setQuestions(props.game.questions);

  }),[props])

  const startGame = () => {
    console.log("starting the game");
  }

    return (
      <Grid>
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <h2>{props.game.title}</h2>
                <Button variant="contained" onClick={startGame}>Start Game</Button>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    );
}

export default HostDisplay;
