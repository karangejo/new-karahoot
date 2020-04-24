import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {style} from '../styles';




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
          <Grid item key={index}>
          <Paper key={index} style={{backgroundColor: style.colors.yellow}}>
            <Grid container spacing={3} direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
              <Grid item>
                <h3>{value.title}</h3> <br/>
              </Grid>
              <Grid item>
                <p> number of questions: {value.numberOfQuestions}</p> <br/>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={playGame} value={JSON.stringify(value)} style={{backgroundColor: style.colors.pink}} >Play</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={deleteGame} value={value._id} style={{backgroundColor: style.colors.pink}} >Delete Game</Button>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
        );
      });
      return(

          <Grid container spacing={6} direction='row' wrap='wrap' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            {items}
          </Grid>

      );
    }

    return (
      <Grid  container direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
        {displayTests()}
      </Grid>
    );
}

export default TestList;
