import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllQuestions } from '../../services/questionService';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getAllQuestions();
      setQuestions(response.data);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      <Link to="/ask">Ask a Question</Link>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link to={`/question/${question.id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;

