import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';


// needs some props set
function HostPause(props) {


  const next = () => {
    console.log("continuing the game");
    props.next();

  }

    return (
      <Grid>
          <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid  container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <h2>Take Break</h2>
                <Button variant="contained" onClick={next}>Next</Button>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    );
}

export default HostPause;
