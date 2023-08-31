import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./catbasic.gif";
import "./PasswordCheck.css";
import PasswordText from "./PasswordText";

function PasswordCheck() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1234") {
      navigate("/messenger");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="password_container">
      <img id="catGIF" src={require("./catbasic.gif")} />
      <PasswordText />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          className="password_input_field"
        />
      </form>
    </div>
  );
}

export default PasswordCheck;
