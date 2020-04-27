import React, { useContext, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { UserContext } from "./../userContext";
import CreateForm from "./../components/createForm";
import CreateImageForm from "./../components/createFormImage";
import ImgOrTxt from "./../components/createImageOrText";
import Layout from "../components/layout";
import { style } from "../styles";
import QuestionImg from "../images/question.png";
import ResponsiveImage from "./../components/responsiveImage";

function Create() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);
  const [displayInputAlert, setDisplayInputAlert] = useState(false);
  const [displayGameChoice, setDisplayGameChoice] = useState(true);
  const [textGame, setTextGame] = useState(false);
  const [answerImages, setAnswerImages] = useState([]);

  const context = useContext(UserContext);

  const uploadFiles = () => {
    console.log("selected many");
    let files = answerImages;
    console.log(files);
    const formData = new FormData();
    //append all files to formData
    for (var file of files) {
      formData.append("uploadedFiles", file);
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:3030/upload-files", formData, config)
      .then(() => {
        console.log("files Saved");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const typeOfTest = () => {
    return textGame ? "text" : "image";
  };

  const saveTest = () => {
    if (!(questions.length <= 0) && !(title === "")) {
      const questionsToBeSaved = {
        title: title,
        owner: context.user.userID,
        numberOfQuestions: questions.length,
        typeOfTest: typeOfTest(),
        questions: questions,
      };

      console.log(questionsToBeSaved);

      axios
        .post("http://localhost:3001/tests/", questionsToBeSaved)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setQuestions([]);
      setShowQuestions(false);
      setTitle("");
    } else {
      console.log("No questions to save!");
    }

    if (!textGame) {
      console.log("upload files to fileServer");
      uploadFiles();
    }
  };

  const validateQuestion = (questionObj) => {
    if (!questionObj.question || !questionObj.answer) {
      return false;
    } else if ("" in questionObj.answers) {
      return false;
    } else {
      return true;
    }
  };

  const addQuestion = (question) => {
    if (validateQuestion(question)) {
      setQuestions(questions.concat(question));
      setShowQuestions(true);
      setDisplayInputAlert(false);
    } else {
      //console.log("invalid missing some fields");
      setDisplayInputAlert(true);
    }
  };

  const removeItem = (array, index) => {
    //console.log(array)
    //console.log(index)
    const newArray = [];
    array.forEach((value, i) => {
      //    console.log(i);
      if (!(index === i)) {
        newArray.push(value);
      }
    });
    return newArray;
  };

  const deleteQuestion = (event) => {
    //console.log(questions)
    const index = event.currentTarget.value;
    const newArray = removeItem(questions, index);
    //  console.log(index);
    //  console.log(newArray)
    setQuestions(newArray);
    if (newArray.length <= 0) {
      setShowQuestions(false);
    }
  };

  const displayInvalidinputAlert = () => {
    return (
      <Alert severity="info" style={{ backgroundColor: style.colors.yellow }}>
        Unable to add questions make sure everything is filled out correctly!
      </Alert>
    );
  };

  const displayQuestions = () => {
    const items = questions.map((value, index) => {
      return (
        <Grid item key={index}>
          <Paper
            key={index}
            style={{
              backgroundColor: style.colors.yellow,
              padding: "20px 20px 20px 20px",
            }}
          >
            <h3>
              {" "}
              {index + 1}) {value.question}{" "}
            </h3>
            <p> a) {value.answers[0]} </p>
            <p> b) {value.answers[1]} </p>
            <p> c) {value.answers[2]} </p>
            <p> d) {value.answers[3]} </p>
            <p> Correct Answer: {value.answer} </p>
            <Button
              variant="contained"
              onClick={deleteQuestion}
              value={index}
              style={{ backgroundColor: style.colors.pink }}
            >
              Delete
            </Button>
          </Paper>
        </Grid>
      );
    });
    return (
      <Paper>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: "20px 20px 20px 20px" }}
        >
          {items}
        </Grid>
      </Paper>
    );
  };

  const playImageGame = () => {
    setTextGame(false);
    setDisplayGameChoice(false);
  };

  const playTextGame = () => {
    setTextGame(true);
    setDisplayGameChoice(false);
  };

  const imageOrText = () => {
    return <ImgOrTxt startImage={playImageGame} startText={playTextGame} />;
  };

  const createChoosenGame = () => {
    if (!displayGameChoice) {
      if (textGame) {
        return <CreateForm addQuestion={addQuestion} saveTest={saveTest} />;
      } else {
        return (
          <CreateImageForm
            addQuestion={addQuestion}
            saveTest={saveTest}
            setAnswerImages={setAnswerImages}
          />
        );
      }
    }
  };

  const loggedInView = () => {
    return (
      <Paper elevation={5} style={{ backgroundColor: style.colors.yellow }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ padding: "20px 20px 20px 20px" }}
        >
          <TextField
            variant="outlined"
            label="Game Title"
            style={{ width: "80vw" }}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />{" "}
          <br />
          {displayGameChoice && imageOrText()}
          {createChoosenGame()}
        </Grid>
      </Paper>
    );
  };

  const loggedOutView = () => {
    return (
      <Grid item>
        <Alert
          severity="info"
          style={{ backgroundColor: style.colors.yellow, width: "80vw" }}
        >
          Please Login to create a game!
        </Alert>
      </Grid>
    );
  };

  const checkLogin = () => {
    if (context.loggedIn) {
      return loggedInView();
    } else {
      return loggedOutView();
    }
  };

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ padding: "20px 20px 20px 20px" }}
      >
        {checkLogin()}
        <br />
        <p></p>
        {!context.loggedIn ? (
          <ResponsiveImage src={QuestionImg} width={300} height={200} />
        ) : null}
        {displayInputAlert && displayInvalidinputAlert()}
        {showQuestions && displayQuestions()}
        <div style={{ height: "40vh" }} />
      </Grid>
    </Layout>
  );
}

export default Create;
