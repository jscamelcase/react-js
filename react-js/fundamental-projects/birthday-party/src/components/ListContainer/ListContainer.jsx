import styles from "./ListContainer.module.css";

function ListContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default ListContainer;
