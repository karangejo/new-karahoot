import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Navbar from './../components/navbar';





function Home() {
    return (
      <Grid>
        <Navbar/>
          <Grid direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <h1 align="center" >
              Home
            </h1>
          </Grid>
        <Navbar/>
      </Grid>
    )
}

export default Home;
