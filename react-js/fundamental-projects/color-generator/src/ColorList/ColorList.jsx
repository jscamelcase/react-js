import { useState } from "react";
import styles from "./ColorList.module.css";
import useClipboard from "../hooks/useClipboard";
import { v4 as uuidv4 } from "uuid";

function ColorList(props) {
  console.log(props.colorList);
  const { isCopied, setIsCopied, copyToClipboard } = useClipboard();

  return (
    <div className={styles.colorList}>
      {props.colorList.map((item, index) => {
        return (
          <div
            key={uuidv4()}
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
