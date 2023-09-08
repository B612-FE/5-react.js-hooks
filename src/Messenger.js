// Messenger.js
import React, { useState } from 'react';
import './Messenger.css';

function Messenger() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isUserSender, toggleUserSender] = useState(true); // 사용자가 발신자인지 여부를 토글

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const sender = isUserSender ? 'user' : 'bot';
      setMessages(prevMessages => [...prevMessages, { text: message, sender }]);
      setMessage('');
    }
  };

  const handleToggleSender = () => {
    toggleUserSender(prevIsUserSender => !prevIsUserSender); // 발신자를 토글
  };

  return (
    <div className="messenger-container">
      <div className="messenger">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-container ${
                msg.sender === 'user' ? 'user' : 'bot'
              }`}
            >
              <div className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
          <button className="toggle-sender-button" onClick={handleToggleSender}>
            Toggle Sender
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
