import React from "react";
import { useHistory } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Login from "./login";
import { style } from "../styles";

function Navbar() {
  const history = useHistory();

  function handleClick(e, value) {
    switch (value) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/create");
        break;
      case 2:
        history.push("/play");
        break;
      case 3:
        history.push("/mystuff");
        break;
      default:
    }
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ width: "100%", padding: "10px 10px 10px 10px" }}
    >
      <Paper
        className="purple"
        style={{ width: "100%", backgroundColor: style.colors.purple }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ padding: "10px 10px 10px 10px" }}
        >
          <Grid item>
            <div align="center">
              <Login />
            </div>
          </Grid>
          <Grid item>
            <BottomNavigation
              onChange={handleClick}
              showLabels
              style={{ backgroundColor: style.colors.purple }}
            >
              <BottomNavigationAction
                label="Home"
                style={{ color: style.colors.yellow }}
              />
              <BottomNavigationAction
                label="Create"
                style={{ color: style.colors.yellow }}
              />
              <BottomNavigationAction
                label="Play"
                style={{ color: style.colors.yellow }}
              />
              <BottomNavigationAction
                label="My Stuff"
                style={{ color: style.colors.yellow }}
              />
            </BottomNavigation>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Navbar;
