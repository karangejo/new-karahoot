import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';



// needs some props set
function AnswersPromptImage(props) {

    const answerQuestion = (event) => {
      const answer = event.currentTarget.value;
      props.sendAnswer(answer);
    }

    const buttonStyleDim = "40vh"

    return (
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container spacing={4} direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Grid item>
                  <button  style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white', backgroundImage: `url(${props.images[0]})`}} onClick={answerQuestion} value={props.question[0]} ></button>
                </Grid>
                <Grid item>
                  <button  style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white', backgroundImage: `url(${props.images[1]})`}} onClick={answerQuestion} value={props.question[1]} ></button>
                </Grid>
              </Grid>
              <Grid  container spacing={4} direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Grid item>
                  <button  style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white' ,backgroundImage: `url(${props.images[2]})`}} onClick={answerQuestion} value={props.question[2]} ></button>
                </Grid>
                <Grid item>
                <button  style={{height: buttonStyleDim, width: buttonStyleDim, color: 'white', backgroundImage: `url(${props.images[3]})`}} onClick={answerQuestion} value={props.question[3]} ></button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
    );
}

export default AnswersPromptImage;
