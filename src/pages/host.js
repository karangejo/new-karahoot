import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Navbar from './../components/navbar';
import { UserContext } from './../userContext';




function Host() {

  const context = useContext(UserContext);

  const loggedInView = () => {
    return(
        <div>
          Show the hosting game scren for this game for this user
        </div>
    );
  }

  const loggedOutView = () => {
    return(
      <div>
        <Alert severity="info">Please Login to host a game!</Alert>
      </div>
    );
  }

  const checkLogin = () => {
    if(context.loggedIn){
      return(loggedInView());
    } else {
      return(loggedOutView());
    }
  }

    return (
      <Grid>
        <Navbar/>
          <Grid  direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            {checkLogin()}
          </Grid>
      </Grid>
    );
}

export default Host;
