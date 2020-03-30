import React, {  useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Countdown from 'react-countdown-now';



// needs some props set
function QuestionsPrompt(props) {

    useEffect(() => {
      console.log("calling setTimeout");
      setTimeout(() => {
        props.timeUp();
      },(props.timeLimit*1000));

    },[props.timeUp,props.timeLimit]);

    const renderer = ({ hours, minutes, seconds, completed }) => {
        // Render a countdown
        return(
          <span>{seconds}</span>
        )
    };

    return (
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Countdown date={Date.now() + (props.timeLimit*1000)} renderer={renderer} />
                <h3>{props.question.question}</h3>
                <h3> Name: {props.question.answers[0]}</h3>
                <h3> Name: {props.question.answers[1]}</h3>
                <h3> Name: {props.question.answers[2]}</h3>
                <h3> Name: {props.question.answers[3]}</h3>
              </Grid>
            </Paper>
          </Grid>
    );
}

export default QuestionsPrompt;
