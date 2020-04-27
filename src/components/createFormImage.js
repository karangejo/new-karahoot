import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Dropdown from "./dropdown";
import UploadFile from "./uploadFile";
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
    <Paper style={{ padding: "20x 20x 20x 20x" }}>
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
          <Button variant="contained" onClick={addQuestion}>
            Add Question
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={saveTest}>
            Save Game
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateImageForm;
