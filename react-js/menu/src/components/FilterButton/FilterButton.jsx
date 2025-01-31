import styles from "./FilterButton.module.css";

function FilterButton(props) {
  return (
    <button
      onClick={() => {
        props.reset(props.catagory);
        console.log(catagory);
      }}
      className={styles.filterButton}
    >
      {props.catagory}
    </button>
  );
}

export default FilterButton;
