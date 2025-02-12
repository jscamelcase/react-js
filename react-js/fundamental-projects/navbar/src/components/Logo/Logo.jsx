import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return <img className={styles.logo} src={logo} />;
}

export default Logo;
