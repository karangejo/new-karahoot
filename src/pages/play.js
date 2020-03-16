import React, { useContext, useState, useEffect }from 'react';
import openSocket from 'socket.io-client';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Navbar from './../components/navbar';
import PlayForm from './../components/playForm';
import WaitingForOthers from './../components/waitingForOthers';

const socket = openSocket( 'http://localhost:8003');



function Play() {
  const [loggedInToGame, setLoggedInToGame] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(true);
  const [playerName, setPlayerName] = useState('')
  const [roomId, setRoomId] = useState('')

  const logIn = (name, roomID) => {
    setRoomId(roomId);
    setPlayerName(name);
    socket.emit("joinRoom", {roomId: roomID, name: name});
    setLoggedInToGame(true);
  }

  const logInView = () => {
    return(
      <PlayForm logIn={logIn}/>
    )
  }

  const loggedInView = () => {
    return(
      <WaitingForOthers name={playerName}/>
    )
  }
    return (
      <Grid>
        <Navbar/>
        <Grid  container direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
          {!loggedInToGame ? logInView() : loggedInView()}
        </Grid>
      </Grid>
    )
}

export default Play;
