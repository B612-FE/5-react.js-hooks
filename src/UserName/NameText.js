import React, { useState, useEffect } from "react";
import "./NameInput.css";

const UserNameText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="UserName_text">
      {isVisible ? "PLZ ENTER YOUR NAME" : "\u00A0"}
    </span>
  );
};

export default UserNameText;
