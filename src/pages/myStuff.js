import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Navbar from './../components/navbar';





function MyStuff() {
    return (
      <Grid>
        <Navbar/>
          <Grid direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <h1 align="center" >
              My Stuff
            </h1>
          </Grid>
      </Grid>
    )
}

export default MyStuff;
