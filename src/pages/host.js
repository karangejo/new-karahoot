import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import { UserContext } from "./../userContext";
import HostDisplay from "./../components/hostDisplay";
import Layout from "./../components/layout";
import { style } from "./../styles";
import QuestionImg from "../images/question.png";
import ResponsiveImage from "./../components/responsiveImage";

function Host() {
  const context = useContext(UserContext);

  const history = useHistory();

  const currentGameView = () => {
    return <HostDisplay game={context.currentGame} />;
  };

  const noCurrentGame = () => {
    console.log("no current game");
    history.push("/mystuff");
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const loggedInView = () => {
    //console.log(context.currentGame);
    if (!isEmpty(context.currentGame)) {
      return currentGameView();
    } else {
      noCurrentGame();
    }
  };

  const loggedOutView = () => {
    return (
      <Grid container direction="column" alignItems="center">
        <Alert
          severity="info"
          style={{ backgroundColor: style.colors.yellow, width: "80vw" }}
        >
          Please Login to host a game!
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

export default Host;
