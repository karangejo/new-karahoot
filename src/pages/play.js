import React, { useState, useEffect }from 'react';
import openSocket from 'socket.io-client';
import Grid from '@material-ui/core/Grid';
import Navbar from './../components/navbar';
import PlayForm from './../components/playForm';
import WaitingForOthers from './../components/waitingForOthers';
import AnswersPrompt from './../components/answersPrompt';
import AnswersPromptImage from './../components/answersPromptImage';
import PlayerPause from './../components/playerPause';
import PlayerFinished from './../components/playerFinishedGame';

const socket = openSocket( 'http://localhost:8003');

var gRoomId = '';
var gPlayerName = '';


function Play() {
  const [loggedInToGame, setLoggedInToGame] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(true);
  const [playerName, setPlayerName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [currentAnswerOptions, setcurrentAnswerOptions] = useState('');
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [score, setScore] = useState(0);
  const [correctlyAnswered, setCorrectlyAnswered] = useState(true);
  const [timeLimit, setTimeLimit] = useState(10000);
  const [noRoom, setNoRoom] = useState(false);
  const [testType, setTestType] = useState('')
  const [images, setImages] = useState([]);

  const setImageAnswers = (answers) => {
    const fileServerURL = "http://127.0.0.1:8080/";

    const imageList = answers.map((element, index) => {
      return(
        fileServerURL + element
      )
    })
    setImages(imageList);
  }

  useEffect(() => {
    console.log("ROOM ID");
    console.log(roomId);
    socket.on("nextQuestion", data => {
      console.log(data);
      setImageAnswers(data.answers)
      setcurrentAnswerOptions(data.answers)
      setPlaying(true);
      setPaused(false);
      setStartTime((new Date()))
    });

    socket.on("pauseGame", () => {
      console.log("pausing game");
      setPaused(true);
    })

    socket.on("finishedGame", () => {
      console.log("game is finished");
      setFinished(true);
    })

    socket.on("correctAnswer", (newScore)  => {
      console.log("Correct your score is " + newScore);
      console.log("state score is " + score);
      const myScore = getScore(newScore);
      console.log("myScore is " +myScore);
      const scoreSet = score+myScore
      console.log("Data Passed to playerSendScore");
      console.log(gPlayerName);
      console.log(gRoomId);
      console.log(scoreSet);
      socket.emit("playerSendScore",{name: gPlayerName, score: scoreSet, roomId: gRoomId})
      setScore(scoreSet);
      setCorrectlyAnswered(true);
    })

    socket.on("wrongAnswer", (newScore)  => {
      console.log("Wrong your score is " + newScore);
      console.log("state score is " + score);
      const myScore = getScore((timeLimit/2));
      console.log("myScore is " +myScore);
      const scoreSet = score-myScore
      console.log("Data Passed to playerSendScore");
      console.log(gPlayerName);
      console.log(gRoomId);
      console.log(scoreSet);
      socket.emit("playerSendScore",{name: gPlayerName, score: scoreSet, roomId: gRoomId})
      setScore(scoreSet);
      setCorrectlyAnswered(false);
    })

    socket.on("sendTimeLimit", timeLimit => {
      console.log("time limit is: " + timeLimit);
      setTimeLimit((timeLimit * 1000));
    })

    socket.on("sendTestType", testType => {
      console.log("test type is: " + testType);
      setTestType(testType);
    })

    socket.on("noSuchRoom", () => {
      console.log("no such room please try again");
      setNoRoom(true)
      setLoggedInToGame(false);
      setRoomId('');
      gRoomId='';
      setPlayerName('');
      gPlayerName='';
    })

    socket.on("joinedRoom", roomId => {
      console.log("joined room " + roomId);
    })

  },[score, timeLimit]);

  const getScore = (score) => {
    console.log("GetSCORE");
    console.log(score);
    console.log(timeLimit);
    return(Math.max(0, timeLimit - score));
  }

  const logIn = (name, roomID) => {
    setLoggedInToGame(true);
    setRoomId(roomID);
    gRoomId=roomID
    socket.emit("joinRoom", {roomId: roomID, name: name});
    setPlayerName(name);
    gPlayerName=name;
  }

  const logInView = () => {
    return(
      <PlayForm logIn={logIn} noRoom={noRoom}/>
    )
  }

  const loggedInView = () => {
    return(
      <WaitingForOthers name={playerName}/>
    )
  }

  const sendAnswer = (answer) => {
    const end = new Date();
    const newScore = end - startTime;
    socket.emit("playerAnswer",{name: playerName, roomId: roomId, answer: answer, score: newScore});
    setPaused(true);
  }

  const chooseView = () => {
    switch(testType){
      case "text":
      return(
        <AnswersPrompt question={currentAnswerOptions} sendAnswer={sendAnswer}/>
      )
      case "image":
      return(
        <AnswersPromptImage images={images}  questions={currentAnswerOptions} sendAnswer={sendAnswer}/>
      )
      default :
      return(
        <AnswersPrompt question={currentAnswerOptions} sendAnswer={sendAnswer}/>
      )
    }
    
  }

  const pauseView = () => {
    return(
      <PlayerPause name={playerName} correct={correctlyAnswered} score={score}/>
    );
  }

  const resetComponent = () => {
    setLoggedInToGame(false);
    setPlaying(false);
    setPaused(true);
    setPlayerName('')
    setRoomId('')
    setcurrentAnswerOptions('');
    setFinished(false);
    setStartTime('');
    setScore(0);
    setCorrectlyAnswered(true);
    setTimeLimit(10000);
    setNoRoom(false);
    gPlayerName='';
    gRoomId=''
  }

  const finishedView = () => {
    return(
      <PlayerFinished name={playerName} score={score} resetComponent={resetComponent}/>
    );
  }


  const checkAndDisplay = () => {

    if(!finished){
      if(!loggedInToGame){
        return(logInView());
      } else {
        if(playing){
          if(paused){
            return(pauseView());
          } else {
            return(chooseView());
          }
        } else {
          return(loggedInView());
        }
      }
    } else {
      return(finishedView())
    }

  }


    return (
      <Grid>
        <Navbar/>
        <Grid  container direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
          {checkAndDisplay()}
        </Grid>
      </Grid>
    )
}

export default Play;
