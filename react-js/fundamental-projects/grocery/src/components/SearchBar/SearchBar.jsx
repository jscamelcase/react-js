import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const { onSubmit, onChange, item } = props;
  return (
    <form onSubmit={onSubmit} className={styles.searchBar}>
      <input
        onChange={onChange}
        className={styles.searchBar__input}
        type="text"
        value={item}
      />
      <button type="submit" className={styles.searchBar__button}>
        Add Item
      </button>
    </form>
  );
}

export default SearchBar;
