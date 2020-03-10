import React, { useContext, useState }from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Navbar from './../components/navbar';
import { UserContext } from './../userContext';
import CreateForm from './../components/createForm';





function Create() {

    const [questions, setQuestions] = useState([]);
    const [showQuestions, setShowQuestions] = useState(false);

    const context = useContext(UserContext);

    const addQuestion = (question) => {
      setQuestions(questions.concat(question));
      setShowQuestions(true);
  //    console.log(questions)

    }

    const removeItem = (array, index) => {
      //console.log(array)
      //console.log(index)
      const newArray = []
        array.forEach((value,i) => {
      //    console.log(i);
          if(!(index == i)){
            newArray.push(value);
          }
        });
      return(newArray);
    }

    const deleteQuestion = (event) => {
      //console.log(questions)
      const index = event.currentTarget.value;
      const newArray = removeItem(questions,index);
    //  console.log(index);
    //  console.log(newArray)
      setQuestions(newArray);
    }

    const displayQuestions = () => {
      const items = questions.map((value, index) => {
        return(
            <Paper>
              <h3> {index+1}) Question: {value.question} </h3>
              <p> 1) {value.answers[0]} </p>
              <p> 2) {value.answers[1]} </p>
              <p> 3) {value.answers[2]} </p>
              <p> 4) {value.answers[3]} </p>
              <p> Correct Answer: {value.answer} </p>
              <Button variant="contained" onClick={deleteQuestion} value={index}>Delete</Button>
            </Paper>
        );
      });
      return(items);
    }

    const loggedInView = () => {
      return(
          <CreateForm addQuestion={addQuestion}/>
      )
    }

    const loggedOutView = () => {
      return(
        <div>
          <Alert severity="info">Please Login to create a game!</Alert>
        </div>
      )
    }

    const checkLogin = () => {
      if(context.loggedIn){
        return(loggedInView());
      } else {
        return(loggedOutView());
      }
    }

    return (
      <Grid>
        <Navbar/>
          <Grid container direction='row' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            {checkLogin()}
            {showQuestions && displayQuestions()}
          </Grid>
      </Grid>
    )
}

export default Create;
