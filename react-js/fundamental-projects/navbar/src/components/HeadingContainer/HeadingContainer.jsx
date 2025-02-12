import styles from "./HeaderContainer.module.css";

function HeadingContainer(props) {
  return <header className={styles.header}>{props.children}</header>;
}

export default HeadingContainer;
