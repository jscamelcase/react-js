import styles from "./ModalButton.module.css";

function ModalButton({ children, onClick }) {
  return (
    <button {...(onClick && { onClick })} className={styles["modal-button"]}>
      {children}
    </button>
  );
}

export default ModalButton;
