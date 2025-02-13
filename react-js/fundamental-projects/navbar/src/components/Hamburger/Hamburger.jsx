import styles from "./Hamburger.module.css";

import { FaBars } from "react-icons/fa";

function Hamburger(props) {
  return (
    <div
      className={styles.hamburger}
      style={{
        transform: props.displayed ? "rotate(90deg)" : "rotate(180deg)",
      }}
    >
      <button className={styles.hamburger__button} onClick={props.onClick}>
        <FaBars style={{ color: "blue", fontSize: "20px" }} />
      </button>
    </div>
  );
}

export default Hamburger;
