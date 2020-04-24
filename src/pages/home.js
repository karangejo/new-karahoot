import React from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from './../components/layout';
import {style} from '../styles';





function Home() {


    return (
      <Layout>
          <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
            <Grid item>
              <h1 align="center" style={{color: style.colors.yellow}}>
                QUIZZAZ
              </h1>
            </Grid>
            <Grid item>
                <div style={{height: "80vh"}}/>
            </Grid>
          </Grid>
      </Layout>
    )
}

export default Home;
