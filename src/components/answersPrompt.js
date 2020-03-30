import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';



// needs some props set
function AnswersPrompt(props) {

    const answerQuestion = (event) => {
      const answer = event.currentTarget.value;
      props.sendAnswer(answer);
    }

    const generateRandomHexColor = () => {
      return('#'+Math.floor(Math.random()*16777215).toString(16));
    }

    const buttonStyleDim = "40vh"

    return (
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container spacing={4} direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Grid item>
                  <Button variant="contained" style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white', background: generateRandomHexColor()}} onClick={answerQuestion} value={props.question[0]} >{props.question[0]}</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white', background: generateRandomHexColor()}} onClick={answerQuestion} value={props.question[1]} >{props.question[1]}</Button>
                </Grid>
              </Grid>
              <Grid  container spacing={4} direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Grid item>
                  <Button variant="contained" style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white' ,background: generateRandomHexColor()}} onClick={answerQuestion} value={props.question[2]} >{props.question[2]}</Button>
                </Grid>
                <Grid item>
                <Button variant="contained" style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white', background: generateRandomHexColor()}} onClick={answerQuestion} value={props.question[3]} >{props.question[3]}</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
    );
}

export default AnswersPrompt;
