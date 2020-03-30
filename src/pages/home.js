import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './../components/navbar';






function Home() {


    return (
      <Grid>
        <Navbar/>
          <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <h1 align="center" >
              QUIZZAZ
            </h1>
          </Grid>
      </Grid>
    )
}

export default Home;
