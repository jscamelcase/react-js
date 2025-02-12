import Nav from "../Nav/Nav";
import styles from "./NavbarContainer.module.css";
import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";

function NavbarContainer(props) {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Nav />
      <SocialIcons />
    </div>
  );
}

export default NavbarContainer;
