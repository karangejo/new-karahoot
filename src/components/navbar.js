import React from "react";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Login from "./login";
import { style } from "../styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Barrio",
    fontSize: "3vw",
  },
});

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
      spacing={1}
      style={{ width: "100%", padding: "10px 10px 10px 10px" }}
    >
      <Grid item>
        <div align="center">
          <Login />
        </div>
      </Grid>
      <Grid item>
        <Paper
          className="purple"
          elevation={10}
          style={{
            width: "100%",
            height: "13vh",
            backgroundColor: style.colors.purple,
            padding: "20ps 20px 20px 20px",
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="inherit"
            style={{ width: "90vw", padding: "10px 10px 10px 10px" }}
          >
            <Grid item>
              <ThemeProvider theme={theme}>
                <BottomNavigation
                  onChange={handleClick}
                  showLabels
                  style={{ backgroundColor: style.colors.purple }}
                >
                  <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon style={style.navIcons} />}
                    style={{ color: style.colors.yellow }}
                  />
                  <BottomNavigationAction
                    label="Create"
                    icon={<NoteAddIcon style={style.navIcons} />}
                    style={{ color: style.colors.yellow }}
                  />
                  <BottomNavigationAction
                    label="Play"
                    icon={<VideogameAssetIcon style={style.navIcons} />}
                    style={{ color: style.colors.yellow }}
                  />
                  <BottomNavigationAction
                    label="My Stuff"
                    icon={<AccountBoxIcon style={style.navIcons} />}
                    style={{ color: style.colors.yellow }}
                  />
                </BottomNavigation>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Navbar;
