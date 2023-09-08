import React, { useState } from "react";
import styled from "styled-components";

const MessageInput = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("text", JSON.stringify(text));
    setText("");
  };

  return (
    <MessageForm onSubmit={onSubmit}>
      <Message
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></Message>
      <MessageButton>전송</MessageButton>
    </MessageForm>
  );
};

const MessageForm = styled.form`
  display: flex;
  height: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const Message = styled.textarea`
  border-radius: 8px;
  width: 85%;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  resize: none;
`;
const MessageButton = styled.button`
  width: 15%;
  margin-right: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border-color: white;
`;

export default MessageInput;
