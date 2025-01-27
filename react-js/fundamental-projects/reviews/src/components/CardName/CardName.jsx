import styles from "./CardName.module.css";

function CardName(props) {
  return (
    <div className={styles.cardName}>
      <h2 className={styles.cardName__heading}>{props.name}</h2>
      <h3 className={styles.cardName__job}>{props.job}</h3>;
    </div>
  );
}

export default CardName;
