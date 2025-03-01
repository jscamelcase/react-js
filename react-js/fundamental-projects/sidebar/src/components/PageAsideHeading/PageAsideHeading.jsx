import styles from "./PageAsideHeading.module.css";

function PageAsideHeading({ children }) {
  return (
    <section className={styles["page-aside__heading"]}>{children}</section>
  );
}

export default PageAsideHeading;
