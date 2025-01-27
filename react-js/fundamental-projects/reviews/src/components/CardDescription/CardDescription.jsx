import styles from "./CardDescription.module.css";

function CardDescription(props) {
  return (
    <div className={styles.cardDescription}>
      <p className={styles.cardDescription__para}>{props.text}</p>
    </div>
  );
}

export default CardDescription;
