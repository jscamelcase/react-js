import styles from "./ModalMessage.module.css";

function ModalMessage({ children }) {
  return <h2 className={styles["modual-message"]}>{children}</h2>;
}

export default ModalMessage;
