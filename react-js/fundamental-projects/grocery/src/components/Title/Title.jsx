import styles from "./Title.module.css";

function Title() {
  return (
    <div className={styles.title__container}>
      <h2 className={styles.title}>Grocery Bud</h2>
    </div>
  );
}

export default Title;
