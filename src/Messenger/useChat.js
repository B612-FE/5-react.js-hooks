import { useState, useCallback } from "react";

function useChat(initialMessages) {
  const [chatLog, setChatLog] = useState(initialMessages);

  const addMessage = useCallback((message) => {
    setChatLog((prevChatLog) => [...prevChatLog, message]);
  }, []);

  return [chatLog, addMessage];
}

export default useChat;
