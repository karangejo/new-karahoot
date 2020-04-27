import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { style } from "./../styles";

// needs some props set
function PlayerPause(props) {
  const rightOrWrong = () => {
    if (props.correct) {
      return <h3> Correct! Genius? </h3>;
    } else {
      return <h3> Incorrect... Sorry! </h3>;
    }
  };

  return (
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
          style={{ padding: "20px 20px 20px 20px" }}
        >
          {rightOrWrong()}
          <h3>Waiting ...</h3>
          <h3> Name: {props.name}</h3>
          <h3> Score: {props.score} </h3>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default PlayerPause;
