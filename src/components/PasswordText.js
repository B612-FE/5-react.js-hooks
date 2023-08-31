import React, { useState, useEffect } from "react";
import "./PasswordCheck.css";

const PasswordText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="password_text">
      {isVisible ? "PLZ ENTER PASSWORD" : "\u00A0"}
    </span>
  );
};

export default PasswordText;
