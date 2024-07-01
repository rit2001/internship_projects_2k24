import React, { useState } from 'react';

const QuestionForm = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion({ text: question, answers: [], votes: 0 });
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
        required
      />
      <button type="submit">Post Question</button>
    </form>
  );
};

export default QuestionForm;
