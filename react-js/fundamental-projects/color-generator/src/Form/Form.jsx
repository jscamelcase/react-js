import { useState, useEffect } from "react";
import styles from "./Form.module.css";

function Form({ color, listColor, handleSubmit, handleChange }) {
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.form__label} htmlFor="color">
          Color Generator
        </label>
        <input
          onChange={handleChange}
          className={styles.form__color}
          id="color"
          type="color"
          value={color}
        />
        <input
          onChange={handleChange}
          className={styles.form__type}
          type="text"
          placeholder="#f15025"
          value={color}
        />
        <button className={styles.form__button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
