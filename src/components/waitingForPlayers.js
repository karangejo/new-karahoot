import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { style } from "../styles";

// needs some props set
function WaitingForPlayers(props) {
  const [players, setPlayers] = useState([]);

  const { socket, addPlayer } = props;
  useEffect(() => {
    socket.on("newPlayer", (name) => {
      console.log("new player joined named: " + name);
      console.log(players);
      const newPlayers = players.concat(name);
      console.log(newPlayers);
      setPlayers(newPlayers);
      addPlayer(newPlayers);
    });
  }, [addPlayer, socket, players, setPlayers]);

  const startQuestions = () => {
    props.startQuestions();
  };

  const displayPlayers = () => {
    const playerItems = players.map((name, index) => {
      return (
        <Grid item>
          <p key={index}>{name}</p>
        </Grid>
      );
    });
    return (
      <Paper elevation={5} style={{ backgroundColor: style.colors.pink }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}
          style={{ padding: "20px 20px 20px 20px" }}
        >
          {playerItems}
        </Grid>
      </Paper>
    );
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
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
            style={{ padding: "20px 20px 20px 20px" }}
          >
            <Grid item>
              <h3>Please enter the following number to play:</h3>
            </Grid>
            <Grid item>
              <h1 style={{ fontFamily: "Bubblegum Sans" }}>{props.roomId}</h1>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={startQuestions}
                style={{
                  backgroundColor: style.colors.pink,
                  fontFamily: style.button.fontFamily,
                }}
              >
                Start Game
              </Button>
            </Grid>
            <Grid item>{!(players.length <= 0) && displayPlayers()}</Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default WaitingForPlayers;
