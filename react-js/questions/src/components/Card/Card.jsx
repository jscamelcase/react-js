import { useState } from "react";

import styles from "./Card.module.css";
import plus from "./../../assets/plus.png";
import minus from "./../../assets/minus.png";
function Card(props) {
  const [isParaDisplayed, setIsParaDisplayed] = useState(false);
  return (
    <article className={styles.article}>
      <section className={styles.article__heading}>
        <h3 className={styles.article__question}>{props.title}</h3>
        <button
          onClick={() => setIsParaDisplayed((prevState) => !prevState)}
          className={styles.article__button}
        >
          <img
            className={styles.article__img}
            src={isParaDisplayed ? minus : plus}
            alt=""
          />
        </button>
      </section>
      {isParaDisplayed && (
        <section className={styles.article__content}>
          <p className={styles.article__para}>{props.info}</p>
        </section>
      )}
    </article>
  );
}

export default Card;
