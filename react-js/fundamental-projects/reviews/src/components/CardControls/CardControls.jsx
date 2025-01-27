import styles from "./CardControls.module.css";
import frameLeft from "../../assets/frame_2.png";
import frameRight from "../../assets/frame_1.png";

function CardControls(props) {
  return (
    <div className={styles.cardControl}>
      <button
        onClick={props.leftOnClick}
        className={styles.cardControl__button}
      >
        <img src={frameLeft} alt="left arrow" />
      </button>
      <button
        onClick={props.rightOnClick}
        className={styles.cardControl__button}
      >
        <img src={frameRight} alt="right arrow" />
      </button>
    </div>
  );
}

export default CardControls;
