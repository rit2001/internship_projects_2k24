import React, { useState } from 'react';

const AnswerForm = ({ addAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnswer(answer);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write an answer"
        required
      />
      <button type="submit">Post Answer</button>
    </form>
  );
};

export default AnswerForm;
