import styles from "./ToursContainer.module.css";
function ToursContainer({ children }) {
  return <div className={styles.toursContainer}>{children}</div>;
}

export default ToursContainer;
