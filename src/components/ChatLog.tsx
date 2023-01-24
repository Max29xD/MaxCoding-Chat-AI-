import { useState, useEffect } from "react";
import { FaRobot, FaUserAlt } from "react-icons/fa";
import { ChatMessage } from "./type";
import TypeWriter from "./TypeWrite";

const ChatLog = ({ chatLog }: { chatLog: ChatMessage[] }) => {
  return (
    <div id="chat-log">
      {chatLog.map(({ sender, message }, index) => (
        <div key={index} className={`chat-box ${sender}`}>
          <div
            className="icon"
            id={sender === "user" ? "user-icon" : "bot-icon"}
          >
            {sender === "user" ? <FaUserAlt /> : <FaRobot />}
          </div>
          {sender === "bot" ? (
            <TypeWriter message={message} />
          ) : (
            <div>{message}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatLog;
