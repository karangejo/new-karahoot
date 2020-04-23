import React, { useState, useEffect } from 'react';
import openSocket from 'socket.io-client';
import StartGame from './startGame';
import WaitingForPlayers from './waitingForPlayers';
import QuestionsPrompt from './questionsPrompt';
import HostFinishedGame from './hostFinishedGame';
import HostPause from './hostPause';

const socket = openSocket( 'http://localhost:8003');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const getId = () => {
  const min = 100000;
  const max = 1000000;
  return(getRandomInt(min,max));
}



// needs some props set
function HostDisplay(props) {
  //const [game, setGame] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLimit, setTimeLimit] = useState(10);
  //const [players, setPlayers] = useState([]);
  //const [playing, setPlaying] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [started, setStarted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showPause, setShowPause] = useState(false);
  const [playerScores, setPlayerScores] = useState({});

  useEffect((() => {
    console.log(props.game);
    //setGame(props.game);
    setQuestions(props.game.questions);
  }),[props])

  useEffect(() => {
    socket.on('created', message => {
      console.log(message);
    });

    socket.on("sendPlayerScores", newPlayerScores => {
      console.log("players score obj:");
      console.log(newPlayerScores);
      setPlayerScores(newPlayerScores);
    })
  },[started, playerScores])

  const startGame = () => {
    console.log("starting the game");
    const roomID = getId();
    console.log("room id is: " + roomID);
    setRoomId(roomID);
    socket.emit('createGameRoom', {roomId: roomID, timeLimit: timeLimit, testType: props.game.typeOfTest});
    setStarted(true);
  }

  const startView = () => {
    return(
      <StartGame gameTitle={props.game.title} startGame={startGame} setTimelimit={setTimeLimit}/>
    )
  }

  const startQuestions = () => {
    setGameStarted(true);
    socket.emit("sendQuestionAnswers", {question: questions[currentQuestion], roomId: roomId});
  }

  const addPlayer = (newPlayers) => {
   // setPlayers(newPlayers);
  }

  const  waitingView = () => {
    return(
      <WaitingForPlayers addPlayer={addPlayer} roomId={roomId} socket={socket} startQuestions={startQuestions}/>
    )
  }

  const timeUp = () => {
    console.log("time's up!")
    const current = currentQuestion + 1;
    if(current >= questions.length){
      setFinished(true);
      socket.emit("finishedGame", roomId);
    } else {
      setShowPause(true);
      socket.emit("pauseGame", roomId);
      setCurrentQuestion(current);
    }
  }

  const questionsView = () => {
    return(
        <QuestionsPrompt question={questions[currentQuestion]} timeUp={timeUp} timeLimit={timeLimit}/>
    )
  }

  const finishedView = () => {
    return(
      <HostFinishedGame scores={playerScores}/>
    )
  }

  const next = () => {
    console.log("no pause now");
    socket.emit("sendQuestionAnswers", {question: questions[currentQuestion], roomId: roomId});
    setShowPause(false);
  }

  const pauseView = () => {
    return(
      <HostPause next={next} scores={playerScores}/>
    )
  }

  const checkAndDisplay = () => {
    if(!started){
      return(startView());
    } else{
      if(!gameStarted){
        return( waitingView())
      } else {
        if(!finished){
          if(showPause){
            return(pauseView())
          } else{
            return(questionsView())
          }
        } else {
          return(finishedView())
        }
      }
    }
  }


    return (
      <div>
        {checkAndDisplay()}
      </div>
    );
}

export default HostDisplay;
