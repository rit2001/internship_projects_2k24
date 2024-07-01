import React, { useState } from 'react';

const VoteButton = ({ votes }) => {
  const [voteCount, setVoteCount] = useState(votes);

  const handleVote = () => {
    setVoteCount(voteCount + 1);
  };

  return (
    <div className="vote-button">
      <button onClick={handleVote}>Like</button>
      <span>{voteCount}</span>
    </div>
  );
};

export default VoteButton;
