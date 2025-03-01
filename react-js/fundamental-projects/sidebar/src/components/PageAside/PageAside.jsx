import styles from "./PageAside.module.css";

function PageAside({ children }) {
  return <aside className={styles.aside}>{children}</aside>;
}

export default PageAside;
