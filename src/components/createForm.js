import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Dropdown from "./dropdown";
import { style } from "./../styles";

function CreateForm(props) {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");

  const handleAnswer = (answer) => {
    setAnswer(answer);
  };

  const addQuestion = () => {
    const questionObj = {
      question: question,
      answers: answers,
      answer: answer,
    };
    //  console.log(questionObj);
    props.addQuestion(questionObj);
  };

  const saveTest = () => {
    props.saveTest();
  };

  return (
    <Paper
      elevation={10}
      style={{
        padding: "20x 20x 20x 20x",
        backgroundColor: style.colors.yellow,
      }}
    >
      <form noValidate autoComplete="off">
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
          style={{ padding: "20px 20px 20px 20px" }}
        >
          <Grid item>
            <TextField
              id="0"
              variant="outlined"
              label="Question"
              style={{ width: "80vw" }}
              onChange={(event) => {
                setQuestion(event.target.value);
              }}
            />{" "}
            <br />
          </Grid>
          <Grid item>
            <TextField
              id="1"
              variant="outlined"
              label="first answer"
              style={{ width: "80vw" }}
              onChange={(event) => {
                setOne(event.target.value);
                setAnswers([event.target.value, two, three, four]);
              }}
            />{" "}
            <br />
          </Grid>
          <Grid item>
            <TextField
              id="2"
              variant="outlined"
              label="second answer"
              style={{ width: "80vw" }}
              onChange={(event) => {
                setTwo(event.target.value);
                setAnswers([one, event.target.value, three, four]);
              }}
            />{" "}
            <br />
          </Grid>
          <Grid item>
            <TextField
              id="3"
              variant="outlined"
              label="third answer"
              style={{ width: "80vw" }}
              onChange={(event) => {
                setThree(event.target.value);
                setAnswers([one, two, event.target.value, four]);
              }}
            />{" "}
            <br />
          </Grid>
          <Grid item>
            <TextField
              id="4"
              variant="outlined"
              label="fourth answer"
              style={{ width: "80vw" }}
              onChange={(event) => {
                setFour(event.target.value);
                setAnswers([one, two, three, event.target.value]);
              }}
            />{" "}
            <br />
          </Grid>
        </Grid>
      </form>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
        style={{ padding: "20px 20px 20px 20px" }}
      >
        <Grid item>
          <Dropdown questions={answers} handleAnswer={handleAnswer} /> <br />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={addQuestion}
            style={{ backgroundColor: style.colors.pink }}
          >
            Add Question
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={saveTest}
            style={{ backgroundColor: style.colors.pink }}
          >
            Save Game
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateForm;
