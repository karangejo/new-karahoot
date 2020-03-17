import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';




function PlayForm(props) {

    const [name, setName] = useState('');
    const [connection, setConnection] = useState('');


    const playGame = () => {
      console.log(`${name} is playing a game on connection ${connection}!`);
      props.logIn(name,connection);
    }

    const alertNoRoom = () => {
      return(
        <Alert severity="info">Sorry... no game was found! <br/> Try another connection.</Alert>
      )
    }

    return (
      <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
        <form noValidate autoComplete="off">
          <TextField id="0"  variant="outlined" label="Name" onChange={(event) => {setName(event.target.value);}}/> <br/>
          <TextField id="1"  variant="outlined" label="Connection" onChange={(event) => {setConnection(event.target.value);}}/> <br/>
        </form>
        {props.noRoom && alertNoRoom()}
        <Button variant="contained" onClick={playGame} >Play</Button>
      </Grid>
    )
}

export default PlayForm;
