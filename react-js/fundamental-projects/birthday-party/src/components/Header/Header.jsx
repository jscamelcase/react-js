import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        {props.listLength} Birthdays Today
      </h1>
    </header>
  );
}

export default Header;
