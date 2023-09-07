import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Messenger from "./Messenger/Messenger.js";
import UserNameInput from "./UserName/NameInput.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserNameInput />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </Router>
  );
}

export default App;
