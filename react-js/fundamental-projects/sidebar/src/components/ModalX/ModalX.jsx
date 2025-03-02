import { FaTimes } from "react-icons/fa";
import styles from "./ModalX.module.css";
import { useContext } from "react";
import { PageContext } from "./../../contexts/PageContext";

function ModalX({ onClick, type }) {
  const { handleToggle, toggle, handleAsideToggle } = useContext(PageContext);

  const handleClick = () => {
    if (type === "modal") {
      handleToggle();
    } else if (type === "aside") {
      handleAsideToggle();
    }

    if (onClick) {
      onClick();
    }
  };
  return <FaTimes onClick={handleClick} className={styles["modal__X"]} />;
}

export default ModalX;
