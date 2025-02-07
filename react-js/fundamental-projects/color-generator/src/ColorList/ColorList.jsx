import { useState } from "react";
import styles from "./ColorList.module.css";

function ColorList(props) {
  console.log(props.colorList);
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

  return (
    <div className={styles.colorList}>
      {props.colorList.map((item, index) => {
        return (
          <div
            onClick={() => {
              copyToClipboard(`#${item.hex}`);
            }}
            className={styles.colorList__item}
            style={{
              backgroundColor: `#${item.hex}`,
            }}
          >
            <p
              className={styles.colorList__label}
              style={{ color: index >= 10 ? `white` : "#0F172A" }}
            >
              {item.weight}%
            </p>

            <p
              className={styles.colorList__label}
              style={{ color: index >= 10 ? `white` : "#0F172A" }}
            >
              #{item.hex} {isCopied && "Copied"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ColorList;
