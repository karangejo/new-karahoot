import React from 'react';
import AnswersPromptImage from './../components/answersPromptImage';
// import Im1 from '../images/buttonSmaller.jpg';
// import Im2 from '../images/loginSmaller.jpg';
// import Im3 from '../images/phasesSmaller.jpg';
// import Im4 from '../images/quizSmaller.jpg';





function Home() {

    const answerSample = ["a","b","c","d"];
    const imageSample = ["https://3docean.net/item/button/24957884","http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Next-icon.png","https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/ISNOBUTTON_is_gift_the_no_button.jpg/resize?size=300&auth=MjA5OTcwODkwMg__","https://previews.123rf.com/images/aquir/aquir1909/aquir190907447/129839047-login-button-login-rounded-green-sign-login.jpg"];
    // const localImageSample = [Im1,Im2,Im3,Im4];

    const sendAnswer = (answer) => {
      console.log(answer);
    }

    return (
      <div>
        <AnswersPromptImage question={answerSample} images={imageSample} sendAnswer={sendAnswer}/>
      </div>
    )
}

export default Home;
