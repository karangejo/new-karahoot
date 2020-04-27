import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dropdown from "./dropdown";
import { style } from "../styles";

// needs some props set
function StartGame(props) {
  const timeLimitOptions = [5, 10, 20, 30, 40, 50, 60];

  const startGame = () => {
    props.startGame();
  };

  const handleAnswer = (timeLimit) => {
    console.log("time limit is: ", timeLimit);
    props.setTimelimit(timeLimit);
  };

  return (
    <Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ padding: "20px 20px 20px 20px" }}
      >
        <Paper elevation={5} style={{ backgroundColor: style.colors.yellow }}>
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
            style={{ padding: "20px 20px 20px 20px" }}
          >
            <Grid item>
              <h2>{props.gameTitle}</h2>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={startGame}
                style={{
                  background: style.colors.pink,
                  fontFamily: style.button.fontFamily,
                }}
              >
                Start Game
              </Button>
            </Grid>
            <Grid item>
              <Dropdown
                text="Time Limit"
                questions={timeLimitOptions}
                handleAnswer={handleAnswer}
                style={{ width: "30vw" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default StartGame;
