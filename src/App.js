import React from "react";
import { Routes, Route } from "react-router-dom";
import * as S from "./styles/App.styled";
import { createGlobalStyle } from "styled-components";
import MessageChattingView from "./components/Chatting/MessageChattingView";
import ChattingList from "./components/ChattingList/ChattingListView";
import MoreView from "./components/MoreView";
import ProfileListView from "./components/UserProfile/ProfileListView";
import MenuBar from "./components/MenuBar";
import StatusBar from "./components/StatusBar";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <S.AppContainer>
        <StatusBar />
        <S.Container>
          <MenuBar />
          <Routes>
            <Route path="/profile" element={<ProfileListView />} />
            <Route path="/chatting-list" element={<ChattingList />} />
            <Route
              path="/chat-with/:userID"
              element={<MessageChattingView />}
            />
            <Route path="/more" element={<MoreView />} />
          </Routes>
        </S.Container>
      </S.AppContainer>
    </div>
  );
}

export default App;
