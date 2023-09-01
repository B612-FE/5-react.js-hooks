import React from "react";

const MessageList = ({ chats, istoMaru }) => {
  return (
    <div className={`${istoMaru ? "MessageListfromW" : "MessageListfromM"}`}>
      {chats &&
        chats.map((chat, timeStamp) => (
          <div key={timeStamp} className="message">
            <div
              className={`${chat.toMaru ? "chatBoxtoMaru" : "chatBoxtoWoorie"}`}
            >
              <span className="author">{chat.author}</span>
              <p className="chatText">{chat.text}</p>
              <span className="chatTime">
                {chat.timeStamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
