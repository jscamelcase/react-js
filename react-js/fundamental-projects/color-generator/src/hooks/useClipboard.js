import { useState } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (text) => {
    try {
      if (!text || typeof text !== "string") {
        console.error("Invalid text for copying:", text);
        return;
      }

      await navigator.clipboard.writeText(text);
      console.log("Copied:", text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return { isCopied, setIsCopied, copyToClipboard };
};

export default useClipboard;
