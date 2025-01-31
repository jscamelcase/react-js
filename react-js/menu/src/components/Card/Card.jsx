import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={props.img} alt={props.title} />
      <div className={styles.card__descriptionContainer}>
        <div className={styles.card__title}>
          <h2 className={styles.card__heading}>{props.title}</h2>
          <span className={styles.card__price}>${props.price}</span>
        </div>

        <p className={styles.card__para}>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
