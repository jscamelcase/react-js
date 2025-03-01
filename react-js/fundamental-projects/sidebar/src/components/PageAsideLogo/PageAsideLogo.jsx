import logo from "./../../assets/logo.png";
import styles from "./../PageAsideLogo/PageAside.module.css";

function PageAsideLogo() {
  return <img src={logo} className={styles["page-aside__logo"]} />;
}

export default PageAsideLogo;
