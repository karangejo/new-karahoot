import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import TestDisplay from "./../components/testDisplay";
import { UserContext } from "./../userContext";
import Layout from "../components/layout";
import { style } from "../styles";
import QuestionImg from "../images/question.png";
import ResponsiveImage from "./../components/responsiveImage";

function MyStuff() {
  const context = useContext(UserContext);

  const loggedInView = () => {
    return (
      <div>
        <TestDisplay />
      </div>
    );
  };

  const loggedOutView = () => {
    return (
      <Grid container direction="column">
        <Alert
          severity="info"
          style={{ backgroundColor: style.colors.yellow, width: "80vw" }}
        >
          Please Login to see your games!
        </Alert>
        <br />
        <p></p>
        <ResponsiveImage src={QuestionImg} width={300} height={200} />
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
        direction="row"
        justify="center"
        style={{ padding: "20px 20px 20px 20px" }}
      >
        {checkLogin()}
        <div style={{ height: "80vh" }} />
      </Grid>
    </Layout>
  );
}

export default MyStuff;
