import styles from "./TabContainer.module.css";

function TabContainer(props) {
  return <div className={styles.tabContainer}>{props.children}</div>;
}

export default TabContainer;
