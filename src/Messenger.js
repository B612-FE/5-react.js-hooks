import React, { useState } from "react";
import useMessages from "./components/useMessages";
import "./Messenger.css";

function Messenger() {
  const [message, setMessage] = useState("");
  const [messages, addMessage] = useMessages(["개강 싫다", "1교시 싫어싫어"]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage("");
  };

  return (
    <div className="messenger_container">
      <h1>개강의 요정</h1>
      <hr />
      <ul className="message_list">
        {messages.map((msgObj, index) => (
          <li
            key={index}
            className={`message_item ${index < 2 ? "left" : "right"}`}>
            <span>{msgObj.content}</span>

            <div className="timestamp">
              {`${msgObj.timestamp
                .getHours()
                .toString()
                .padStart(2, "0")}:${msgObj.timestamp
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}
            </div>
          </li>
        ))}
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
