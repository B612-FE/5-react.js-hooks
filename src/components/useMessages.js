import { useState, useEffect } from "react";

function useMessages(initialMessages) {
  const [messages, setMessages] = useState(
    initialMessages.map((msg) => ({ content: msg, timestamp: new Date() }))
  );

  const addMessage = (message) => {
    if (message !== "") {
      setMessages([...messages, { content: message, timestamp: new Date() }]);
    }
  };

  return [messages, addMessage];
}

export default useMessages;
