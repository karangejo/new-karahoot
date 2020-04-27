import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { style } from "./../styles";

// needs some props set
function PlayerFinishedGame(props) {
  const history = useHistory();

  const goBack = () => {
    console.log("going back to mystuff page");
    history.push("/mystuff");
  };

  const playerScoreItems = (scoreObj) => {
    let sortable = [];

    for (var name in scoreObj) {
      sortable.push([name, scoreObj[name]]);
    }

    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });

    const items = sortable.map((item, index) => {
      return (
        <h3 key={index}>
          {" "}
          {index + 1} : {item[0]} : {item[1]}{" "}
        </h3>
      );
    });
    return items;
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
            style={{ padding: "20px 20px 20px 20px" }}
          >
            <h2>Game Finished</h2>
            {playerScoreItems(props.scores)}
            <Button
              variant="contained"
              color="primary"
              onClick={goBack}
              style={{
                backgroundColor: style.colors.pink,
                fontFamily: style.button.fontFamily,
              }}
            >
              My Games
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PlayerFinishedGame;
