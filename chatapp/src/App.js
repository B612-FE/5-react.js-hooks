import "./App.css";
import MessageInput from "./MessageInput";
import MessageList from "./MessageBox";
import MyHeader from "./MyHeader";

function App() {
  return (
    <div className="App">
      <MyHeader leftChild="<" rightChild="⁝" />
      <MessageList></MessageList>
      <MessageInput />
    </div>
  );
}

export default App;
