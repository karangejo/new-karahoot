import React, { useContext, useState }from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Navbar from './../components/navbar';
import { UserContext } from './../userContext';
import CreateForm from './../components/createForm';





function Create() {

    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [showQuestions, setShowQuestions] = useState(false);

    const context = useContext(UserContext);

    const saveTest = () => {
      if(!(questions.length <= 0)){
        const questionsToBeSaved = {
                                    title: title,
                                    owner: context.user.userID,
                                    numberOfQuestions: questions.length,
                                    questions: questions
                                  };

        console.log(questionsToBeSaved);

        axios.post('http://localhost:3001/tests/',questionsToBeSaved)
                              .then((res) => {
                                console.log(res);
                              })
                              .catch((err) => {
                                console.log(err);
                              });
        setQuestions([]);
        setShowQuestions(false);
        setTitle('');
        
      } else {
        console.log("No questions to save!");
      }

    }

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
      if(newArray.length <= 0){
        setShowQuestions(false);
      }
    }

    const displayQuestions = () => {
      const items = questions.map((value, index) => {
        return(
            <Paper key={index}>
              <Grid container direction='column' justify='center' alignItems='flex-start' style={{padding: "20px 20px 20px 20px"}}>
                <h3> {index+1}) Question: {value.question} </h3>
                <p> 1) {value.answers[0]} </p>
                <p> 2) {value.answers[1]} </p>
                <p> 3) {value.answers[2]} </p>
                <p> 4) {value.answers[3]} </p>
                <p> Correct Answer: {value.answer} </p>
                <Button variant="contained" onClick={deleteQuestion} value={index}>Delete</Button>
              </Grid>
            </Paper>
        );
      });
      return(
        <Paper>
          <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            {items}
          </Grid>
        </Paper>
        );
    }

    const loggedInView = () => {
      return(
          <Paper>
            <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
              <TextField   variant="outlined" label="Game Title" onChange={(event) => {setTitle(event.target.value);}}/> <br/>
              <CreateForm addQuestion={addQuestion} saveTest={saveTest}/>
            </Grid>
          </Paper>
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
          <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            {checkLogin()}
            <br/>
            <p></p>
            {showQuestions && displayQuestions()}
          </Grid>
      </Grid>
    )
}

export default Create;
