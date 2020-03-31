import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import ResponsiveImage from './responsiveImage';


// needs some props set
function AnswersPromptImage(props) {

    const answerQuestion = (event) => {
      const answer = event.currentTarget.value;
      props.sendAnswer(answer);
    }

    const buttonStyleWidth = "38vw"
    const buttonStyleHeight = "40vh"

    return (
          <Grid  container direction='column' justify='center' alignItems='center'>
              <Grid  container spacing={4} direction='row' justify='center' alignItems='center' style={{padding: "10px 10px 10px 10px"}}>
                <Grid item>
                  <button  style={{height: buttonStyleHeight, width: buttonStyleWidth, color: 'white', background: 'none', alignItems:"center"}} onClick={answerQuestion} value={props.files[0]} >
                    <ResponsiveImage src={props.images[0]} width={300} height={300}/>
                  </button>
                </Grid>
                <Grid item>
                <button  style={{height: buttonStyleHeight, width: buttonStyleWidth, color: 'white', background: 'none', alignItems:"center"}} onClick={answerQuestion} value={props.files[1]} >
                  <ResponsiveImage src={props.images[1]} width={300} height={300}/>
                </button>
                </Grid>
              </Grid>
              <Grid  container spacing={4} direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <Grid item>
                <button  style={{height: buttonStyleHeight, width: buttonStyleWidth, color: 'white', background: 'none', alignItems:"center"}} onClick={answerQuestion} value={props.files[2]} >
                  <ResponsiveImage src={props.images[2]} width={300} height={300}/>
                </button>
                </Grid>
                <Grid item>
                <button  style={{height: buttonStyleHeight, width: buttonStyleWidth, color: 'white', background: 'none', alignItems:"center"}} onClick={answerQuestion} value={props.files[3]} >
                  <ResponsiveImage src={props.images[3]} width={300} height={300}/>
                </button>
                </Grid>
              </Grid>
          </Grid>
    );
}

export default AnswersPromptImage;
