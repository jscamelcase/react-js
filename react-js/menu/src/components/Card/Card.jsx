import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src="/images/item-1.jpeg" alt="" />
      <div className={styles.card__descriptionContainer}>
        <div className={styles.card__title}>
          <h2 className={styles.card__heading}>Buttermilk Pancakes</h2>
          <span className={styles.card__price}>$15.99</span>
        </div>

        <p className={styles.card__para}>
          I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
          freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf
          bitters live-edge blue bottle, hammock freegan copper mug whatever
          cold-pressed
        </p>
      </div>
    </div>
  );
}

export default Card;
