import React from 'react';
import { useHistory } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';



function Navbar() {

  const history = useHistory();

  function handleClick(e,value) {
    switch(value){
      case 0:
        history.push('/');
        break;
      case 1:
        history.push('/create');
        break;
      case 2:
        history.push('/play');
        break;
      case 3:
        history.push('/mystuff');
        break;
      default:
    }
  }

  return (
    <div>
    <Grid container direction='column' justify='center' alignItems='center' style={{width: "100%"}} >
    <Paper style={{width: "100%"}}>
      <BottomNavigation
      onChange={handleClick}
      showLabels
      >
      <BottomNavigationAction label="Home" />
      <BottomNavigationAction label="Create" />
      <BottomNavigationAction label="Play" />
      <BottomNavigationAction label="My Stuff" />
    </BottomNavigation>
    </Paper>
    </Grid>
    </div>
  );
};

export default Navbar;
