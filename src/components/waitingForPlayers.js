import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { style } from "../styles";

// needs some props set
function WaitingForPlayers(props) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    props.socket.on("newPlayer", (name) => {
      console.log("new player joined named: " + name);
      console.log(players);
      const newPlayers = players.concat(name);
      console.log(newPlayers);
      setPlayers(newPlayers);
      props.addPlayer(newPlayers);
    });
  }, [players, setPlayers]);

  const startQuestions = () => {
    props.startQuestions();
  };

  const displayPlayers = () => {
    const playerItems = players.map((name, index) => {
      return <p key={index}>{name}</p>;
    });
    return (
      <Paper style={{ backgroundColor: style.colors.pink }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
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
        <Paper style={{ backgroundColor: style.colors.yellow }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ padding: "20px 20px 20px 20px" }}
          >
            <h3>Please enter the following number to play:</h3>
            <h3>{props.roomId}</h3>
            <Button variant="contained" onClick={startQuestions}>
              Start Game
            </Button>
            {!(players.length <= 0) && displayPlayers()}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default WaitingForPlayers;
