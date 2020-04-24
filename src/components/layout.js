import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './navbar';
import {style} from '../styles';


function Layout(props) {
  

  return (
    
        <Grid style={{backgroundColor: style.colors.blue}} >
            <Navbar/>
            {props.children}
        </Grid>

   

  );
};

export default Layout;
