import { FaTimes } from "react-icons/fa";
import styles from "./ModalX.module.css";
import { useContext } from "react";
import { PageContext } from "./../../contexts/PageContext";

function ModalX({ onClick }) {
  const { handleToggle, toggle } = useContext(PageContext);

  const handleClick = () => {
    handleToggle();
    if (onClick) {
      onClick();
    }
  };
  return <FaTimes onClick={handleClick} className={styles["modal__X"]} />;
}

export default ModalX;
