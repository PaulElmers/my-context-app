import React, { useState } from 'react';
import { useChat } from './ChatContext';

const Chat = () => {
  const { messages, sendMessage } = useChat();
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Чат</h2>
      <div>
        {messages.map((msg) => (
          <p key={msg.id}>{msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Напишіть повідомлення..."
      />
      <button onClick={handleSendMessage}>Відправити</button>
    </div>
  );
};

export default Chat;
