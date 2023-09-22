import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Member from "./pages/Member";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Member />}></Route>
            <Route path="/ChatList" element={<ChatList />}></Route>
            <Route path="/ChatRoom/:sender" element={<ChatRoom />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
