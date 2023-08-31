// import React, { useState } from 'react';
// import qnaList from './Data.jsx';
// import axios from 'axios';
// import './Recommend.css';
// import { useNavigate  } from 'react-router-dom';
// //추천하는 과정에 띄워주는게 필요
// const SERVER_URL = 'http://localhost:3002/api/submitResults';

// function Recommend() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const navigate = useNavigate();
//   const currentQuestion = qnaList[currentQuestionIndex].q;
//   const currentAnswers = qnaList[currentQuestionIndex].a;

//   const [answerTemperature, setAnswerTemperature] = useState(0);
//   const [answerLight, setAnswerLight] = useState(0);
//   const [answerWater, setAnswerWater] = useState(0);
//   const [answerLevel, setAnswerLevel] = useState(0);
  
//   const handleAnswerSelection = (answer) => {
//     // console.log(answer.value);
//     // //각각 더하기
//     setAnswerTemperature((prevTemperature) => prevTemperature + answer.answerTemperature);
//     setAnswerLight((prevLight) => prevLight + answer.answerLight);
//     setAnswerWater((prevWater) => prevWater + answer.answerWater);
//     setAnswerLevel((prevLevel) => prevLevel + answer.answerLevel);
//     sendResultsToBackend(answer);

//     if (currentQuestionIndex < qnaList.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
      
//     } else {
//       console.log('No more questions');
      
//     }
//   };

//   const sendResultsToBackend = (answer) => {
//     const data = {
//       answerTemperature: answerTemperature + answer.answerTemperature,
//       answerLight: answerLight + answer.answerLight,
//       answerWater: answerWater + answer.answerWater,
//       answerLevel: answerLevel + answer.answerLevel,
//     };
  
//     axios.post(SERVER_URL, data)
//       .then((response) => {
//         console.log('Server response:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error submitting answer:', error);
//       });
//   };
//   return (
//     <div className='recommend'>
//       <div className='questionNumber'> Q.{currentQuestionIndex+1}</div>
//       <div className='recommendQuestion'>{currentQuestion}</div>

//       <ul className='recommendAnswerList'>
//         {currentAnswers.map((answer, index) => (
//           <li className='recommendAnswer'key={index}>
//             <button onClick={() => handleAnswerSelection(answer)}>{answer.answer}</button>
//           </li>
//         ))}
//       </ul>
//       {currentQuestionIndex === qnaList.length-1  && (
//         <button className="submitButton" onClick={() => navigate('/RecommendResult')}>제출하기</button>
        
//       )}
//     </div>
//   );
// }

// export default Recommend;

import React, { useState } from 'react';
import qnaList from './Data.jsx';
import axios from 'axios';
import './Recommend.css';
import { useNavigate } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3002/api/submitResults';

function Recommend() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const currentQuestion = qnaList[currentQuestionIndex].q;
  const currentAnswers = qnaList[currentQuestionIndex].a;

  const [totalAnswer, setTotalAnswer] = useState({
    answerTemperature: 0,
    answerLight: 0,
    answerWater: 0,
    answerLevel: 0,
  });

  const handleAnswerSelection = (answer) => {
    const updatedAnswer = {
      answerTemperature: totalAnswer.answerTemperature + (answer.answerTemperature || 0),
      answerLight: totalAnswer.answerLight + (answer.answerLight || 0),
      answerWater: totalAnswer.answerWater + (answer.answerWater || 0),
      answerLevel: totalAnswer.answerLevel + (answer.answerLevel || 0),
    };

    setTotalAnswer(updatedAnswer);

    if (currentQuestionIndex < qnaList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('No more questions');
      sendResultsToBackend(updatedAnswer);
    }
  };

  const sendResultsToBackend = (answer) => {
    axios.post(SERVER_URL, answer)
      .then((response) => {
        console.log('Server response:', response.data);
      })
      .catch((error) => {
        console.error('Error submitting answer:', error);
      });
  };

  return (
    <div className='recommend'>
      <div className='questionNumber'> Q.{currentQuestionIndex + 1}</div>
      <div className='recommendQuestion'>{currentQuestion}</div>

      <ul className='recommendAnswerList'>
        {currentAnswers.map((answer, index) => (
          <li className='recommendAnswer' key={index}>
            <button onClick={() => handleAnswerSelection(answer)}>{answer.answer}</button>
          </li>
        ))}
      </ul>
      {currentQuestionIndex === qnaList.length - 1 && (
        <button className="submitButton" onClick={() => navigate('/RecommendResult')}>제출하기</button>
      )}
    </div>
  );
}

export default Recommend;