import { useState } from "react";
import { ChatMessage } from "./components/type";
import ChatLog from "./components/ChatLog";
import "./index.css";
import ChatInput from "./components/ChatInput";
import Logo from "./components/Logo";

const App = () => {
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = () => {
    const message = userInput.trim();

    if (message === "") return;

    if (message === "/dev") {
      setUserInput("");
      appendMessage("user", message);
      setIsLoading(true);
      setTimeout(() => {
        appendMessage("bot", "Este código fuente fue creado por MaxCoding");
        setIsLoading(false);
      }, 2000);
      return;
    }
    appendMessage("user", message);
    setUserInput("");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
      },
      body: `{"messages":[{"role":"user","content":"${message}"}]}`,
    };

    fetch(import.meta.env.VITE_CHAT_API_URL, options)
      .then((response) => response.json())
      .then((response) => {
        appendMessage("bot", response.choices[0].message.content);
        setIsLoading(false);
      })
      .catch((err) => {
        appendMessage("bot", `Error: ${err.message}`);
        setIsLoading(false);
      });
  };

  const appendMessage = (sender: string, message: string) => {
    setChatLog((prevChatLog) => [...prevChatLog, { sender, message }]);
  };

  return (
    <div className="container">
      <div className="header">
        <h3>MaxCoding AI</h3>
      </div>
      <div className="info">
        <Logo />
        <a href="marcosbonilla.ml" target="_blank" rel="noopener noreferrer">
          Coded By MaxCoding
        </a>
      </div>
      <div className="chat-container">
        <ChatLog chatLog={chatLog} />
      </div>
      <ChatInput
        isLoading={isLoading}
        sendMessage={sendMessage}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
};

export default App;
