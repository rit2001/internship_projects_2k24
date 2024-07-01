import React from 'react';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';
import VoteButton from './VoteButton';

const QuestionList = ({ questions, addAnswer }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <h3>{question.text}</h3>
          <VoteButton votes={question.votes} />
          <AnswerForm addAnswer={(answer) => addAnswer(answer, index)} />
          <AnswerList answers={question.answers} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
