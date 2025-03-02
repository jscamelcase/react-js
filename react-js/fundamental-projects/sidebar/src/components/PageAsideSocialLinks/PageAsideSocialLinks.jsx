import styles from "./PageAsideSocialLinks.module.css";

function PageAsideSocialLinks({ children }) {
  return <div className={styles["page-aside__social-links"]}>{children}</div>;
}

export default PageAsideSocialLinks;
