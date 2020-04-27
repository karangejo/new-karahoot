import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { style } from "./../styles";

function ImgOrTxt(props) {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={2}
    >
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={props.startText}
          style={{
            backgroundColor: style.colors.pink,
            fontFamily: style.button.fontFamily,
          }}
        >
          Text Game
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={props.startImage}
          style={{
            backgroundColor: style.colors.pink,
            fontFamily: style.button.fontFamily,
          }}
        >
          Image Game
        </Button>
      </Grid>
    </Grid>
  );
}

export default ImgOrTxt;
