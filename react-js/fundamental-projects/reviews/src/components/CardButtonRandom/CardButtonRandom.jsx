import styles from "./CardButtonRandom.module.css";
function CardButtonRandom(props) {
  return (
    <div className={styles.buttonRandom__container}>
      <button onClick={props.onClick} className={styles.buttonRandom}>
        Surprise Me
      </button>
    </div>
  );
}

export default CardButtonRandom;
