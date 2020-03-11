import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';





//needs a prop of tests of type [] and a prop of deleteGame of type function() and a prop of playGame of  type function()
function TestList(props) {

    const deleteGame = (event) => {
      //console.log(event.currentTarget.value);
      props.deleteGame(event.currentTarget.value);
    }

    const playGame = (event) => {
    //  console.log(event.currentTarget.value);
      props.playGame(JSON.parse(event.currentTarget.value));
    }

    const displayTests = () => {
      const items = props.tests.map((value, index) => {
        return(
          <Paper key={index}>
            <Grid container direction='column' justify='center' alignItems='flex-start' style={{padding: "20px 20px 20px 20px"}}>
              <p>{value.title}</p> <br/>
              <p> number of question: {value.numberOfQuestions}</p> <br/>
              <Button variant="contained" onClick={playGame} value={JSON.stringify(value)}>Play</Button>
              <Button variant="contained" onClick={deleteGame} value={value._id}>Delete Game</Button>
            </Grid>
          </Paper>
        );
      });
      return(
        <Paper>
          <Grid container direction='column' justify='center' alignItems='flex-start' style={{padding: "20px 20px 20px 20px"}}>
            {items}
          </Grid>
        </Paper>
      );
    }

    return (
      <Grid  container direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
        {displayTests()}
      </Grid>
    );
}

export default TestList;
