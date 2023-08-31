import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PasswordCheck from "./components/PasswordCheck.js";
import Messenger from "./Messenger";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasswordCheck />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </Router>
  );
}

export default App;
