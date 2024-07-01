import React, { useState } from 'react';
import './App.css';
import QuestionList from './components/QuestionList';
import QuestionForm from './components/QuestionForm';

const App = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const addAnswer = (answer, questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.push(answer);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="App">
      <h1>Hear Out</h1>
      <QuestionForm addQuestion={addQuestion} />
      <QuestionList questions={questions} addAnswer={addAnswer} />
    </div>
  );
};

export default App;
