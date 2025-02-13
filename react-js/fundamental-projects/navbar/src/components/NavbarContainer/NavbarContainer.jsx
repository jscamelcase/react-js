import Nav from "../Nav/Nav";
import styles from "./NavbarContainer.module.css";
import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";
import Hamburger from "../Hamburger";
import { useState, useRef } from "react";

function NavbarContainer(props) {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const toggleDisplay = function () {
    setIsDisplayed((prev) => !prev);
  };

  return (
    <div className={styles.navbar}>
      <Logo />
      <Nav displayed={isDisplayed} />
      <SocialIcons />
      <Hamburger onClick={toggleDisplay} displayed={isDisplayed} />
    </div>
  );
}

export default NavbarContainer;
