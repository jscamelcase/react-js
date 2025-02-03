import styles from "./JobCard.module.css";
import { v4 as uuidv4 } from "uuid";

function JobCard(props) {
  const { id, order, title, dates, duties, company } = props;
  const listItems = duties.map((item) => (
    <li key={uuidv4()} className={styles.card__item}>
      {item.replace(/\n/g, "")}
    </li>
  ));
  return (
    <section className={styles.card}>
      <div className={styles.card__title}>
        <h3 className={styles.card__heading}>{title}</h3>
        <h4 className={styles.card__company}>{company}</h4>
        <h5 className={styles.card__dates}>{dates}</h5>
      </div>
      <ul className={styles.card__list}>{listItems}</ul>
    </section>
  );
}

export default JobCard;
