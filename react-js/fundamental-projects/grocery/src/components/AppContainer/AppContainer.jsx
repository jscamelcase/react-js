import styles from "./AppContainer.module.css";

function AppContainer(props) {
  return <main className={styles.appContainer}>{props.children}</main>;
}

export default AppContainer;
