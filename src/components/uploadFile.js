import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import axios from  'axios';


function Upload() {

  const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');

  const uploadFile = (event) => {
      console.log("selected one");
      console.log(file);
      const formData = new FormData();
      formData.append('uploadedFile',file)
      const config = {
         headers: {
             'content-type': 'multipart/form-data'
         }
       }
      axios.post('http://localhost:3030/upload-file', formData, config)
        .then(() => {
          console.log("file Saved");
        })
        .catch((err) => {
          console.log(err);
        });
  }


  const changedFile = (event) => {
    const uploadedFile = event.target.files[0]
    setFile(uploadedFile);
    setFileNames([uploadedFile.name]);
  }

  const displayFileNames = () => {
    const items = fileNames.map((value, index) => {
      return(
        <Alert key={index} severity="success">{value}</Alert>
      );
    });
    return(fileNames ? items : null);
  }

  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Grid container direction="row" justify="flex-start" alignItems="center" >
        <input
            onChange={changedFile}
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" color="primary" component="span" >
              Choose
            </Button>
          </label>
          {displayFileNames()}
        </Grid>
        <Button variant="contained" color="primary" component="span" onClick={uploadFile}>
          Upload
        </Button>
    </Grid>
  );
}


export default Upload;
