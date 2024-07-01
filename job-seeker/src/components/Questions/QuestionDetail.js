import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../services/questionService';
import AnswerForm from '../Answers/AnswerForm';

const QuestionDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await getQuestionById(id);
      setQuestion(response.data);
    };
    fetchQuestion();
  }, [id]);

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.content}</p>
      <h3>Answers</h3>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>{answer.content}</li>
        ))}
      </ul>
      <AnswerForm questionId={id} />
    </div>
  );
};

export default QuestionDetail;
``
