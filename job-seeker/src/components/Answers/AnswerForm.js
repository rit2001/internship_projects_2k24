import React, { useState } from 'react';
import { createAnswer } from '../../services/answerService';

const AnswerForm = ({ questionId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAnswer({ questionId, content });
      window.location.reload();  // Refresh the page to show the new answer
    } catch (err) {
      console.error('Failed to post answer:', err);
    }
  };

  return (
    <div>
      <h3>Post an Answer</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Your answer"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AnswerForm;
