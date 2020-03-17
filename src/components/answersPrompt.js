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

    return (
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  item direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Button variant="contained" onClick={answerQuestion} value={props.question[0]} >{props.question[0]}</Button>
                <Button variant="contained" onClick={answerQuestion} value={props.question[1]} >{props.question[1]}</Button>
              </Grid>
              <Grid  item direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Button variant="contained" onClick={answerQuestion} value={props.question[2]} >{props.question[2]}</Button>
                <Button variant="contained" onClick={answerQuestion} value={props.question[3]} >{props.question[3]}</Button>
              </Grid>
            </Paper>
          </Grid>
    );
}

export default AnswersPrompt;
