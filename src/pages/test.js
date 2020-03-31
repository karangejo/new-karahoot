import React from 'react';
import AnswersPromptImage from './../components/answersPromptImage';




function Home() {

    const answerSample = ["a","b","c","d"];
    const imageSample = ["http://localhost:8080/buttonB.jpg","http://localhost:8080/buttonB.jpg","http://localhost:8080/buttonB.jpg","http://localhost:8080/buttonB.jpg",];
    // const localImageSample = [Im1,Im2,Im3,Im4];

    const sendAnswer = (answer) => {
      console.log(answer);
    }
//      <AnswersPromptImage images={imageSample} files={answerSample}/>

    return (
      <div>
        <AnswersPromptImage images={imageSample} files={answerSample}/>
      </div>
    )
}

export default Home;
