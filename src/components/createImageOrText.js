import React from 'react';
import Button from '@material-ui/core/Button';


function ImgOrTxt(props) {


    return (
      <div>
        <Button variant="contained" onClick={props.startText}>Text Game</Button>
        <Button variant="contained" onClick={props.startImage}>Image Game</Button>
      </div>
    )
}

export default ImgOrTxt;
