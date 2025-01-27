import styles from "./CardContainer.module.css";
function CardContainer(props) {
  return <div className={styles.cardContainer}>{props.children}</div>;
}

export default CardContainer;
