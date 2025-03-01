import styles from "./PageAsideLinks.module.css";

function PageAsideLinks({ children }) {
  return <div className={styles["page-aside__links"]}>{children}</div>;
}

export default PageAsideLinks;
