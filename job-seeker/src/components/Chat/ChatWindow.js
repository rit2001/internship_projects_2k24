import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCurrentUser } from '../../services/authService';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get('https://your-api-url.com/messages');
      setMessages(response.data);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    const user = getCurrentUser();
    const response = await axios.post('https://your-api-url.com/messages', {
      userId: user.id,
      content: newMessage
    });
    setMessages([...messages, response.data]);
    setNewMessage('');
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map(msg => (
          <div key={msg.id}>
            <p><strong>{msg.userName}</strong>: {msg.content}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatWindow;
