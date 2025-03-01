import styles from "./ModalButton.module.css";
import { PageContext } from "./../../contexts/PageContext";
import { useContext } from "react";

function ModalButton({ children, onClick }) {
  const { handleToggle, toggle } = useContext(PageContext);
  const handleClick = () => {
    handleToggle();
    if (onClick) {
      onClick();
    }
  };
  return (
    <button onClick={handleClick} className={styles["modal-button"]}>
      {children}
    </button>
  );
}

export default ModalButton;
