import { useState } from "react";
import styles from "./Tour.module.css";

function Tour(props) {
  const [isFullParagraph, setFullParagraph] = useState(false);
  const toggleFullPara = function () {
    setFullParagraph((previousParagraph) => !previousParagraph);
  };
  return (
    <div className={styles.tourCard}>
      <div className={styles.tourCard__imgContainer}>
        <img className={styles.tourCard__img} src={props.image} alt="" />
        <span className={styles.tourCard__price}>${props.price}</span>
      </div>
      <div className={styles.tourCard__des}>
        <h3 className={styles.tourCard__title}>{props.name}</h3>
        <p
          style={{ height: isFullParagraph ? "auto" : "145px" }}
          className={styles.tourCard__para}
        >
          {props.info}
        </p>
        {isFullParagraph || <span>...</span>}
        <button className={styles.tourCard__readMore} onClick={toggleFullPara}>
          Read {isFullParagraph ? "Less" : "More"}
        </button>
        <div>
          <button
            className={styles.tourCard__button}
            onClick={() => {
              props.onClick(props.id);
            }}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tour;
