import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Dropdown from './dropdown';




function CreateForm(props) {

    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [answer, setAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState('');

    const handleAnswer = (answer) => {
      setAnswer(answer)
    }

    const addQuestion = () => {
      const questionObj = {
        question: question,
        answers: answers,
        answer: answer
      }
    //  console.log(questionObj);
      props.addQuestion(questionObj);
    }

    const saveTest = () => {
      props.saveTest();
    }

    return (
      <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
        <Paper style={{padding: "20x 20x 20x 20x"}}>
          <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <form noValidate autoComplete="off">
              <TextField id="0"  variant="outlined" label="Question" onChange={(event) => {setQuestion(event.target.value);}}/> <br/>
              <TextField id="1"  variant="outlined" label="first answer" onChange={(event) => {setOne(event.target.value);
                                                                          setAnswers([event.target.value, two, three, four]);
                                                                          }}/> <br/>
              <TextField id="2"  variant="outlined"  label="second answer" onChange={(event) => {setTwo(event.target.value);
                                                                          setAnswers([one,event.target.value, three, four]);
                                                                          }}/> <br/>
              <TextField id="3"  variant="outlined"  label="third answer" onChange={(event) => {setThree(event.target.value);
                                                                          setAnswers([one, two, event.target.value, four]);
                                                                          }}/> <br/>
              <TextField id="4"  variant="outlined"  label="fourth answer" onChange={(event) => {setFour(event.target.value);
                                                                          setAnswers([one, two, three, event.target.value]);
                                                                          }}/> <br/>
            </form>
            <Dropdown questions={answers} handleAnswer={handleAnswer}/> <br/>
            <Button variant="contained" onClick={addQuestion} >Add Question</Button>
            <Button variant="contained" onClick={saveTest} >Save Game</Button>
          </Grid>
        </Paper>
      </Grid>
    )
}

export default CreateForm;
