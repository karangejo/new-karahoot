import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Navbar from "./../components/navbar";
import TestDisplay from "./../components/testDisplay";
import { UserContext } from "./../userContext";
import Layout from "../components/layout";
import { style } from "../styles";

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
      <div>
        <Alert severity="info" style={{ backgroundColor: style.colors.yellow }}>
          Please Login to see your games!
        </Alert>
      </div>
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
