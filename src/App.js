import { useState } from "react";
import "./App.css";
import MessageList from "./MessageList";
import useToggle from "./useToggle";

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

  return (
    <div className="App">
      <div className="Container">
        <div className="section">
          <header className="chattingName">
            <button>&lt;</button>
            <span onClick={toggle}>{istoMaru ? "Maru🐶" : "Woorie💕"}</span>
            <button>&#8942;</button>
          </header>
          <section className="chats">
            <MessageList chats={chats} istoMaru={istoMaru}></MessageList>
          </section>
          <form onSubmit={addChat} className="input">
            <input
              type="text"
              value={newChat}
              onChange={(e) => setNewChat(e.target.value)}
            ></input>
            <button type="submit">전송</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
