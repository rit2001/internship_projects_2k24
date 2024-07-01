import React from 'react';
import VoteButton from './VoteButton';

const AnswerList = ({ answers }) => {
  return (
    <div>
      {answers.map((answer, index) => (
        <div key={index} className="answer">
          <p>{answer}</p>
          <VoteButton />
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
