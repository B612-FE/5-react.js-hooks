// Messenger.js
import React, { useState } from 'react';
import useToggle from './useToggle';//useToggle커스텀 훅을 불러오기
import './Messenger.css';//스타일링 css파일 불러오기

function Messenger() {
  const [isMessengerOpen, toggleMessenger] = useToggle(false);//토글기능을 이용한 끄고키기
  const [message, setMessage] = useState('');//현제 입력된 메시지 상태
  const [messages, setMessages] = useState([]);//이전에 보낸 메시지

  const handleSendMessage = () => {//메세지 보내기 위한 함수 제작
    if (message.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
      setMessage('');//입력 상자 비우기
    }
  };

  return (
    <div className="messenger-container">
      <button className="toggle-button" onClick={toggleMessenger}>
        Toggle Messenger
      </button>
      {isMessengerOpen && (
        <div className="messenger">
          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-container ${
                  msg.sender === 'user' ? 'user' : 'bot'
                }`}
              >
                <div className="message">{msg.text}</div>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Messenger;
