import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Dropdown from "./dropdown";
import UploadFile from "./uploadFile";
import { style } from "./../styles";

//import axios from  'axios';

// needs to be edited to accept a background image and answer images

function CreateImageForm(props) {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  // const [answerImages, setAnswerImages] = useState(['','','','']);
  const [answerImagesFileNames, setAnswerImagesFileNames] = useState([
    "",
    "",
    "",
    "",
  ]);

  const inputWidth = "50vw";

  const handleAnswer = (answer) => {
    setAnswer(answer);
  };

  const addQuestion = () => {
    const questionObj = {
      question: question,
      answers: answerImagesFileNames,
      answer: answer,
    };
    //  console.log(questionObj);
    props.addQuestion(questionObj);
  };

  const saveTest = () => {
    props.saveTest();
  };

  const getImages = (fileArray) => {
    // setAnswerImages(fileArray);
    props.setAnswerImages(fileArray);
  };

  return (
    <Paper
      elevation={10}
      style={{
        backgroundColor: style.colors.yellow,
        padding: "20x 20x 20x 20x",
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
              style={{ width: inputWidth }}
              onChange={(event) => {
                setQuestion(event.target.value);
              }}
              inputProps={{ style: { color: style.colors.pink } }}
            />{" "}
            <br />
          </Grid>
          <Grid item>
            <h3>Upload 4 answer images</h3>
          </Grid>
          <Grid item>
            <UploadFile
              setFiles={getImages}
              setFileNames={setAnswerImagesFileNames}
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
          <Dropdown
            questions={answerImagesFileNames}
            handleAnswer={handleAnswer}
          />{" "}
          <br />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={addQuestion}
            style={{
              backgroundColor: style.colors.pink,
              fontFamily: style.button.fontFamily,
            }}
          >
            Add Question
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={saveTest}
            style={{
              backgroundColor: style.colors.pink,
              fontFamily: style.button.fontFamily,
            }}
          >
            Save Game
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateImageForm;
