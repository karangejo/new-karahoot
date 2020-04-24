import React from 'react';
import AnswersPromptImage from './../components/answersPromptImage';




function Home() {

    const answerSample = ["a","b","c","d"];
    const imageSample = ["http://localhost:8080/dolphin.jpeg","http://localhost:8080/elephant.jpeg","http://localhost:8080/monkey.jpeg","http://localhost:8080/tiger.jpeg",];
    // const localImageSample = [Im1,Im2,Im3,Im4];

    const sendAnswer = (answer) => {
      console.log(answer);
    }
//      <AnswersPromptImage images={imageSample} files={answerSample}/>

    return (
      <div>
        <AnswersPromptImage images={imageSample} questions={answerSample} sendAnswer={sendAnswer}/>
      </div>
    )
}

export default Home;
