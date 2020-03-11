import React, { useContext, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Navbar from './../components/navbar';
import TestDisplay from './../components/testDisplay';
import { UserContext } from './../userContext';




function MyStuff() {
  const [tests, setTests] = useState({});

  const context = useContext(UserContext);


  const loggedInView = () => {
    return(
        <div>
          <TestDisplay/>
        </div>
    );
  }

  const loggedOutView = () => {
    return(
      <div>
        <Alert severity="info">Please Login to see your games!</Alert>
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
          <Grid  container direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            {checkLogin()}
          </Grid>
      </Grid>
    );
}

export default MyStuff;
