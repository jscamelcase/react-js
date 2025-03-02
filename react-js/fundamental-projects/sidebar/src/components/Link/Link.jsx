import styles from "./Link.module.css";

function Link({ children, href }) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
}

export default Link;
