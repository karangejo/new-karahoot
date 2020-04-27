import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { style } from "./../styles";

// needs some props set
function PlayerFinished(props) {
  const goBack = () => {
    props.resetComponent();
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
          <h3>Finished!</h3>
          <h3> Name: {props.name}</h3>
          <h3> Score: {props.score}</h3>
          <Button
            variant="contained"
            onClick={goBack}
            style={{ backgroundColor: style.colors.pink }}
          >
            Play Again
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default PlayerFinished;
