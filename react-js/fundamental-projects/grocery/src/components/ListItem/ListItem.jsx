import styles from "./ListItem.module.css";
import { useState } from "react";

function ListItem(props) {
  const [isMarked, setIsMarked] = useState(false);
  const handleCheck = function (e) {
    setIsMarked((prev) => !prev);
  };
  
  return (
    <div className={styles.listItem}>
      <input
        onInput={handleCheck}
        type="checkbox"
        className={styles.listItem__checkbox}
      />
      <span
        style={{ textDecoration: isMarked ? "line-through" : "none" }}
        className={styles.listItem__title}
      >
        {props.product}
      </span>
    </div>
  );
}

export default ListItem;
