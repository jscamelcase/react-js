import styles from "./NumberInput.module.css";

function NumberInput(props) {
  console.log(props.number);
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <label className={styles.form__label} htmlFor="paragraphs">
        Paragraphs
      </label>
      <input
        className={styles.form__input}
        id="paragraphs"
        type="number"
        min="1"
        max="8"
        step="1"
        onChange={props.handleInput}
        value={props.number}
      />
      <button className={styles.form__button} type="submit">
        Generate
      </button>
    </form>
  );
}

export default NumberInput;
