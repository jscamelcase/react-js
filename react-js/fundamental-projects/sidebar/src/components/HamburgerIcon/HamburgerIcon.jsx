import { HiMenu } from "react-icons/hi";
import styles from "./HamburgerIcon.module.css";

function HamburgerIcon({ homePage, onClick }) {
  return (
    <HiMenu
      {...(onClick && { onClick })}
      className={homePage ? styles["hamburger--home"] : styles["hamburger"]}
    />
  );
}

export default HamburgerIcon;
