import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Navbar from './../components/navbar';
import PlayForm from './../components/playForm';





function Play() {
    return (
      <Grid>
        <Navbar/>
          <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Paper>
              <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
                <PlayForm/>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    )
}

export default Play;
