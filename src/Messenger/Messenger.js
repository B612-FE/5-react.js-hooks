import React, { useState, useEffect, useRef, useCallback } from "react";
import useChat from "./useChat.js";
import "./Messenger.css";

const ChatItem = React.memo(({ chatItem, UserName }) => (
  <li className="message_item">
    <div
      className={`message_content ${
        chatItem.UserName === UserName ? "user" : "gaegang"
      }`}>
      <span className="chatitem_message">{chatItem.message}</span>
      <small className="timestamp">{`${chatItem.timestamp}`}</small>
    </div>
  </li>
));

function Messenger() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialUserName = urlParams.get("UserName");

  const [isUserSender, setIsUserSender] = useState(true);
  const [UserName, setUserName] = useState(initialUserName);

  useEffect(() => {
    setUserName(isUserSender ? initialUserName : "개강의 요정");
  }, [isUserSender]);

  const initialMessages = [
    {
      UserName: "개강의 요정",
      message: "개강 싫어싫어",
      timestamp: getTimestamp(),
    },
    {
      UserName: "개강의 요정",
      message: "1교시 싫어",
      timestamp: getTimestamp(),
    },
  ];

  const [chatLog, addMessage] = useChat(initialMessages);

  function getTimestamp() {
    let date = new Date();
    let hours = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2);

    return `${hours}:${minutes}`;
  }

  const [message, setMessage] = useState("");

  const handleChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (message !== "") {
        addMessage({
          UserName: UserName,
          message: message,
          timestamp: getTimestamp(),
        });
        setMessage("");
      }
    },
    [addMessage, message, UserName]
  );

  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  return (
    <div className="messenger_container">
      <h1>
        <span onClick={() => setIsUserSender(!isUserSender)}>
          {isUserSender ? "개강의 요정" : initialUserName}
        </span>
      </h1>
      <hr />

      <ul className="message_list">
        {chatLog.map((chatItem, index) => (
          <ChatItem key={index} chatItem={chatItem} UserName={UserName} />
        ))}
        <div ref={messagesEndRef} />
      </ul>

      <form onSubmit={handleSubmit} className="message_form">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          className="input_field"
        />
        <button type="submit" className="submit_button">
          전송
        </button>
      </form>
    </div>
  );
}

export default Messenger;
