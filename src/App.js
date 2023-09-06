import React from "react";
import { Route } from "react-router-dom";
import * as S from "./styles/App.styled";
import MessageChattingView from "./components/Chatting/MessageChattingView";
import ChattingList from "./components/ChattingList/ChattingListView";
import MoreView from "./components/MoreView";
import ProfileListView from "./components/UserProfile/ProfileListView";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <S.Container>
      <Route path="/" component={MenuBar} />
      <Route path="/profile" component={ProfileListView} />
      <Route path="/chatting-list" component={ChattingList} />
      <Route path="/chat-with/:userID" component={MessageChattingView} />
      <Route path="/more" component={MoreView} />
    </S.Container>
  );
}

export default App;
