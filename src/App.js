import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MessageChattingView from "./components/Chatting/MessageChattingView";
import ChattingList from "./components/ChattingList/ChattingListView";
import MoreView from "./components/MoreView";
import ProfileListView from "./components/UserProfile/ProfileListView";
import MenuBar from "./components/MenuBar";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Route path="/" component={MenuBar} />
      <Route path="/profile" component={ProfileListView} />
      <Route path="/chatting-list" component={ChattingList} />
      <Route path="/chat-with/:userID" component={MessageChattingView} />
      <Route path="/more" component={MoreView} />
    </Container>
  );
}

export default App;
