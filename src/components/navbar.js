import React from 'react';
import { useHistory } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Login from './login';



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

    <Grid container direction='column' justify='center' alignItems='center' style={{width: "100%", padding: "20px 20px 20px 20px"}} >
    <Paper style={{width: "100%"}}>
      <div align="center">
        <Login/>
      </div>
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

  );
};

export default Navbar;
