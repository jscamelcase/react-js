import { HiMenu } from "react-icons/hi";
import styles from "./HamburgerIcon.module.css";
import { PageContext } from "./../../contexts/PageContext";
import { useContext } from "react";

function HamburgerIcon({ homePage, onClick }) {
  const { asideToggle, handleAsideToggle } = useContext(PageContext);
  const handleClick = () => {
    handleAsideToggle();
    if (onClick) {
      onClick();
    }
  };
  return (
    <HiMenu
      onClick={handleClick}
      className={homePage ? styles["hamburger--home"] : styles["hamburger"]}
    />
  );
}

export default HamburgerIcon;
