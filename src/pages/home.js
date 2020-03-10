import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Navbar from './../components/navbar';
import { UserContext } from './../userContext';





function Home() {

    const context = useContext(UserContext);

    return (
      <Grid>
        <Navbar/>
          <Grid direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <h1 align="center" >
              Home
            </h1>
          </Grid>
      </Grid>
    )
}

export default Home;
