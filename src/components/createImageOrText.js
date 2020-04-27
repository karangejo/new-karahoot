import React from "react";
import Button from "@material-ui/core/Button";
import { style } from "./../styles";

function ImgOrTxt(props) {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={props.startText}
        style={{ backgroundColor: style.colors.pink }}
      >
        Text Game
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={props.startImage}
        style={{ backgroundColor: style.colors.pink }}
      >
        Image Game
      </Button>
    </div>
  );
}

export default ImgOrTxt;
