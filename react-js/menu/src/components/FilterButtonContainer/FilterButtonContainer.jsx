import styles from "./FilterButtonContainer.module.css";
function FilterButtonContainer(props) {
  return <div className={styles.filterButtonContainer}>{props.children}</div>;
}

export default FilterButtonContainer;
