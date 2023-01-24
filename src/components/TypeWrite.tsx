import { useEffect, useState } from "react";
import { TypeWriterProps } from "./type";

const TypeWriter = ({ message }: TypeWriterProps) => {
  const [displayedMessage, setDisplayedMessage] = useState("");
  let animationFrame: number;

  const type = () => {
    for (let i = 0; i < message.length; i++) {
      if (i < message.length) {
        setDisplayedMessage((prev) => prev + message.charAt(i));
        animationFrame = requestAnimationFrame(type);
      } else {
        cancelAnimationFrame(animationFrame);
      }
    }
  };

  useEffect(() => {
    animationFrame = requestAnimationFrame(type);
    return () => cancelAnimationFrame(animationFrame);
  }, [message]);

  return <div>{displayedMessage}</div>;
};

export default TypeWriter;
