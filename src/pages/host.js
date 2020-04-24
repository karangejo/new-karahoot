import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import { UserContext } from './../userContext';
import HostDisplay from './../components/hostDisplay';
import Layout from './../components/layout';


function Host() {

  const context = useContext(UserContext);

  const history = useHistory();


  const currentGameView = () => {
    return(
          <HostDisplay game={context.currentGame}/>
    );
  }

  const noCurrentGame = () => {
    console.log("no current game");
    history.push("/mystuff")
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const loggedInView = () => {
    //console.log(context.currentGame);
    if(!(isEmpty(context.currentGame))){
      return(currentGameView());
    } else {
      noCurrentGame()
    }
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
      <Layout>
          <Grid  container direction='row' justify='center'  style={{padding: "20px 20px 20px 20px"}}>
            {checkLogin()}
            <div style={{height: "80vh"}}/>
          </Grid>
      </Layout>
          
    );
}

export default Host;
