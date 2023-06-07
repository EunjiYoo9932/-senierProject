import React, { useState } from 'react';
import qnaList from './Data.jsx';
import axios from 'axios';

//추천하는 과정에 띄워주는게 필요
const SERVER_URL = 'http://localhost:3002/api/submitResults';

function Recommend() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = qnaList[currentQuestionIndex].q;
  const currentAnswers = qnaList[currentQuestionIndex].a;

  const handleAnswerSelection = (answer) => {
    console.log(answer.answer);
    sendResultsToBackend(answer.answer);

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
    <div>
      <h3>{currentQuestion}</h3>
      <ul>
        {currentAnswers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerSelection(answer)}>{answer.answer}</button>
            <button onClick={() => handleAnswerSelection(answer)}>{answer.answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommend;

/*
import React from 'react'
import qnaList from './Data.jsx';
import { useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3002/api/submitResults';


function Recommend() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const currentQuestion = qnaList[currentQuestionIndex].q;
  const currentAnswers = qnaList[currentQuestionIndex].a;

  const handleAnswerSelection = (answer) => {
    console.log('Selected answer:', answer);
    setSelectedAnswers((prevAnswers) => [...prevAnswers, answer]);
    
    if (currentQuestionIndex < qnaList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      sendResultsToBackend(selectedAnswers);
    }
  };

  const sendResultsToBackend = (answer) => {
    const data = {
      answer
    };
  
    axios.post(SERVER_URL, {answer})
      .then((response) => {
        // 서버 응답 처리
        console.log('Server response:', response.data);
        
      })
      .catch((error) => {
        // 오류 처리
        console.error('Error submitting results:', error);
      });
  };
  return (
    
    <div>
      <h3>{currentQuestion}</h3>
      <ul>
        {currentAnswers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerSelection(answer)}>{answer.answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommend;
*/