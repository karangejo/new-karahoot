import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { UserContext } from './../userContext';
import TestList from './testList';




function TestDisplay() {
  const [tests, setTests] = useState({});
  const [showTests, setShowTests] = useState(false);

  const context = useContext(UserContext);

  const history = useHistory();

  useEffect((() => {

    const baseURL = 'http://localhost:3001/tests/id?id='
    const url = baseURL + context.user.userID;

    axios.get(url)
        .then((res) => {
          console.log(res.data);
          setTests(res.data);
          setShowTests(true);
        })
        .catch((err) => {
          console.log(err);
        })

  }),[context.user.userID])

    const getTests = () => {
      const baseURL = 'http://localhost:3001/tests/id?id='
      const url = baseURL + context.user.userID;

      axios.get(url)
          .then((res) => {
            console.log(res.data);
            setTests(res.data);
            setShowTests(true);
          })
          .catch((err) => {
            console.log(err);
          })
    }

    const deleteGame = (id) => {
      console.log("deleting game of id: " + id);
      const baseURL = 'http://localhost:3001/tests/deletebyid';

      axios.post(baseURL,{id:id})
            .then((res) => {
              console.log(res.data);
            })
            .then(() => {
              getTests();
            })
            .catch((err) => {
              console.log(err);
            })
    }

    const playGame = (game) => {
      //console.log(game);
      context.setCurrentGame(game);
      history.push('/host')
    }

    const displayTests = () => {
      return(
        <TestList tests={tests} deleteGame={deleteGame} playGame={playGame}/>
      );
    }

    return (
      <div>
      {showTests && displayTests()}
      </div>
    );
}

export default TestDisplay;
