import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Dropdown(props) {
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(props.questions);
  }, [props.questions]);

  const handleChange = (event) => {
    setAnswer(event.target.value);
    props.handleAnswer(event.target.value);
  };

  const displayMenuItems = () => {
    const items = questions.map((value, index) => {
      return (
        <MenuItem key={index} value={value}>
          {value}
        </MenuItem>
      );
    });
    return items;
  };

  return (
    <FormControl
      size="medium"
      fullWidth={true}
      style={props.style || { width: "80vw" }}
    >
      <InputLabel id="demo-simple-select-label">
        {props.text || "Answer"}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={answer}
        onChange={handleChange}
        autoWidth={true}
        variant="outlined"
      >
        {displayMenuItems()}
      </Select>
    </FormControl>
  );
}
