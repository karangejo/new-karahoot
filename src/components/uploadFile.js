import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';



function UploadFile(props) {

  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [displayNotEnoughFiles, setNotEnoughFiles] = useState(false);
  const [displayImageWarning, setDisplayImageWarning] = useState(false);

  const getNamesFromFiles = (fileArray) => {
    let namesArray = [];
    for(var i in fileArray){
      namesArray.push(fileArray[i].name);
    }
    setFileNames(namesArray);
    props.setFileNames(namesArray);
  }

  const getFiles = (fileArray) => {
    let returnArray = [];
    console.log(fileArray)
    for(var i in fileArray){
      if(typeof fileArray[i] == 'object'){
        returnArray.push(fileArray[i]);
      }
    }
    return(returnArray);
  }

  const validateImages = (validationFiles) => {
    console.log(typeof(validationFiles));
    const types = Object.keys(validationFiles).map((key) => {
        if(!validationFiles[key].type.match(/image.*/)){
          return(false);
        } else {
          return(true);
        }
    })
    return(!(types.includes(false)));
  }

  const changedFile = (event) => {
    setFiles([]);
    props.setFiles([]);
    setFileNames([]);
    const uploadedFiles = event.target.files
    if(validateImages(uploadedFiles)){
      setDisplayImageWarning(false);
      const fileArray = getFiles(uploadedFiles);
      if(fileArray.length <4){
         setNotEnoughFiles(true);
      } else {
        setNotEnoughFiles(false);
        getNamesFromFiles(fileArray);
        setFiles(fileArray);
        props.setFiles(fileArray);
      }
    } else {
      setDisplayImageWarning(true);
    }

  }

  const displayNotImageWarning = () => {
    return(
        displayImageWarning ? <Alert severity="info">Please upload image files.</Alert> : null
    )
  }

  const displayNotEnough = () => {
    return(
        displayNotEnoughFiles ? <Alert severity="info">Not enough files. Please upload 4 files.</Alert> : null
    )
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
          {displayNotEnough()}
          {displayNotImageWarning() }
        </Grid>
    </Grid>
  );
}


export default UploadFile;
