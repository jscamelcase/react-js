import styles from "./Paragraphs.module.css";
import { nanoid } from "nanoid";

function Paragraphs(props) {
  return (
    <article className={styles.paragraphs}>
      {props.paras &&
        props.paras.map((para) => (
          <p key={nanoid()} className={styles.para}>
            {para}
          </p>
        ))}
    </article>
  );
}

export default Paragraphs;
