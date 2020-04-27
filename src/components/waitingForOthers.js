import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { style } from "./../styles";

// needs some props set
function WaitingForOthers(props) {
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
          <h3>Waiting for game to start...</h3>
          <h3> Name: {props.name}</h3>
          <h3> Check for your name on screen </h3>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default WaitingForOthers;
