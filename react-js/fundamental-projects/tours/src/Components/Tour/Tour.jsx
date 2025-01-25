import styles from "./Tour.module.css";

function Tour(props) {
  return (
    <div className={styles.tourCard}>
      <div className={styles.tourCard__imgContainer}>
        <img className={styles.tourCard__img} src={props.image} alt="" />
        <span className={styles.tourCard__price}>${props.price}</span>
      </div>
      <p className="tourCard__para">{props.info}</p>
      <div>
        <button className="tourCard__button">Not Interested</button>
      </div>
    </div>
  );
}

export default Tour;
