import React, { useState } from "react";
import catGIF from "./catbasic.gif";
import "./NameInput.css";
import UserNameText from "./NameText";

function UserNameInput() {
  const [UserName, setUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (UserName === "") {
      alert("이름을 입력해 주세요");
    } else {
      window.location.href = `/messenger?UserName=${UserName}`;
    }
  }

  return (
    <div className="UserName_container">
      <img id="catGIF" src={catGIF} />
      <UserNameText />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
          className="UserName_input_field"
        />
      </form>
    </div>
  );
}

export default UserNameInput;
