import { FaTelegramPlane } from "react-icons/fa";

const ChatInput = ({
  isLoading,
  sendMessage,
  userInput,
  setUserInput,
}: {
  isLoading: boolean;
  sendMessage: () => void;
  userInput: string;
  setUserInput: (value: string) => void;
}) => (
  <div className="input-container">
    <input
      type="text"
      id="user-input"
      placeholder="Enviar un mensaje."
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage();
        }
      }}
    />
    <button id="send-button" onClick={sendMessage}>
      {isLoading ? <span className="loader"></span> : <FaTelegramPlane />}
    </button>
  </div>
);

export default ChatInput;
