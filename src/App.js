import { useState } from "react";
import "./styles/App.css";
import MessageList from "./components/MessageList";
import useToggle from "./hooks/useToggle";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: none;
  padding: 10px;
  width: 340px;
  height: 700px;
  background-color: rgb(218, 233, 241);
  border-radius: 16px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

const ChattingName = styled.header`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledButton = styled.button`
  flex-basis: 20px;
  border-radius: 100px;
  border: 1px;
`;

const UserName = styled.span`
  flex-basis: 190px;
`;

const Chats = styled.section`
  height: 600px;
  padding-bottom: 10px;
`;

const InputForm = styled.form`
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
  position: sticky;
  bottom: 0;
`;

const MessageInputBox = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  background-color: #f7e730;
  color: rgb(0, 0, 0);
  border: none;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;
`;

function App() {
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [istoMaru, toggle] = useToggle(true); //초기값은 true

  const addChat = (e) => {
    e.preventDefault();
    if (newChat !== "") {
      const sender = istoMaru ? "Woorie" : "Maru";
      setChats([
        ...chats,
        {
          author: sender,
          text: newChat,
          timeStamp: new Date(),
          toMaru: istoMaru,
        },
      ]);
      setNewChat("");
    }
  };
  //header flex 로 다시 구성하기!!
  return (
    <Wrapper>
      <Container>
        <ChattingName>
          <StyledButton>&lt;</StyledButton>
          <UserName onClick={toggle}>
            {istoMaru ? "Maru🐶" : "Woorie💕"}
          </UserName>
          <StyledButton>&#8942;</StyledButton>
        </ChattingName>
        <Chats>
          <MessageList chats={chats} istoMaru={istoMaru}></MessageList>
        </Chats>
        <InputForm onSubmit={addChat} className="input">
          <MessageInputBox
            type="text"
            value={newChat}
            onChange={(e) => setNewChat(e.target.value)}
          ></MessageInputBox>
          <SubmitButton type="submit">전송</SubmitButton>
        </InputForm>
      </Container>
    </Wrapper>
  );
}

export default App;
