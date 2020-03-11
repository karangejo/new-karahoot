import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Navbar from './../components/navbar';
import { UserContext } from './../userContext';
import HostDisplay from './../components/hostDisplay';



function Host() {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLimit, setTimeLimit] = useState(30);

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
      <Grid>
        <Navbar/>
          <Grid  container direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            {checkLogin()}
          </Grid>
      </Grid>
    );
}

export default Host;
