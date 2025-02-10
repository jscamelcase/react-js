import styles from "./ListItemCont.module.css";
function ListItemCont(props) {
  return <div className={styles.listItemCont}>{props.children}</div>;
}

export default ListItemCont;
