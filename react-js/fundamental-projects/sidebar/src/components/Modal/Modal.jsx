import styles from "./Modal.module.css";
import { useContext } from "react";
import { PageContext } from "./../../contexts/PageContext";

function Modal({ children }) {
  const { toggle } = useContext(PageContext);

  return (
    <div
      className={
        toggle ? styles.modal : `${styles.modal} ${styles["modal--hidden"]}`
      }
    >
      {children}
    </div>
  );
}

export default Modal;
