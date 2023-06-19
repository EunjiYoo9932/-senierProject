import React, { useState } from 'react';
import qnaList from './Data.jsx';
import axios from 'axios';
import './Recommend.css';
import { useNavigate  } from 'react-router-dom';
//추천하는 과정에 띄워주는게 필요
const SERVER_URL = 'http://localhost:3002/api/submitResults';

function Recommend() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const currentQuestion = qnaList[currentQuestionIndex].q;
  const currentAnswers = qnaList[currentQuestionIndex].a;
  
  const handleAnswerSelection = (answer) => {
    console.log(answer.value);
    //각각 더하기

    sendResultsToBackend(answer.value);

    if (currentQuestionIndex < qnaList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
    } else {
      console.log('No more questions');
      
    }
  };


  const sendResultsToBackend = (answer) => {
    const data = { answer: answer };

    axios.post(SERVER_URL, data)
      .then((response) => {
        console.log('Server response:', response.data);
      })
      .catch((error) => {
        console.error('Error submitting answer:', error);
      });
  };
  return (
    <div className='recommend'>
      <div className='questionNumber'> Q.{currentQuestionIndex+1}</div>
      <div className='recommendQuestion'>{currentQuestion}</div>

      <ul className='recommendAnswerList'>
        {currentAnswers.map((answer, index) => (
          <li className='recommendAnswer'key={index}>
            <button onClick={() => handleAnswerSelection(answer)}>{answer.answer}</button>
          </li>
        ))}
      </ul>
      {currentQuestionIndex === qnaList.length-1  && (
        <button className="submitButton" onClick={() => navigate('/RecommendResult')}>제출하기</button>
        
      )}
    </div>
  );
}

export default Recommend;

