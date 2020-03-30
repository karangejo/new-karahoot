import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Navbar from './../components/navbar';
import TestDisplay from './../components/testDisplay';
import { UserContext } from './../userContext';


function MyStuff() {

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
