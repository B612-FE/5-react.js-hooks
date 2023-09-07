import React, { useState } from "react";
import * as S from "../../styles/Chatting.styled";

export default function MessageInputBar({ clickInputButton }) {
  const [messageUserInput, setMessageUserInput] = useState("");

  function enterPressed(e) {
    if (e.key === "Enter") {
      handleClickInputButton();
    }
  }

  function handleChange(e) {
    setMessageUserInput(e.target.value);
  }

  function handleClickInputButton() {
    if (messageUserInput !== "") {
      clickInputButton(messageUserInput);
      setMessageUserInput("");
    }
  }

  return (
    <S.MessageInputContainer>
      <S.MessageInputBox
        placeholder="메세지를 입력하세요 !"
        value={messageUserInput}
        onChange={handleChange}
        onKeyDown={enterPressed}
      />
      <S.MessageInputButton onClick={handleClickInputButton}>
        ↩
      </S.MessageInputButton>
    </S.MessageInputContainer>
  );
}
