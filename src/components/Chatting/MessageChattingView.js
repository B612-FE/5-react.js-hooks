import React, { useState } from "react";
import TopBar from "./MessageTopBar";
import MessageBox from "./MessageBox";
import MessageInputBar from "./MessageInputBar";
// import styled from "styled-components";
import * as S from "../../styles/Chatting.styled";
import { useParams } from "react-router";
import ChatSet from "../../data/BasicChat";

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   flex-direction: column;
// `;

function ChattingView() {
  let { userID } = useParams();
  const [isMe, setIsMe] = useState(true);
  const currentUser = isMe ? 1 : userID;
  const [userChattingMessageSet, setUserChattingMessageSet] = useState([
    ChatSet[userID - 1],
  ]);

  function switchUser() {
    setIsMe(!isMe);
  }
  function clickInputButton(messageUserInput) {
    let ID = Date.now();
    setUserChattingMessageSet((formerMessage) => [
      ...formerMessage,
      { chattingUser: currentUser, messageContext: messageUserInput, id: ID },
    ]);
  }

  return (
    <S.Container>
      <TopBar switchUser={switchUser} currentUser={currentUser} />
      <MessageBox userChattingMessageSet={userChattingMessageSet} />
      <MessageInputBar clickInputButton={clickInputButton} />
    </S.Container>
  );
}

export default ChattingView;
