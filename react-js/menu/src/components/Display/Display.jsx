import styles from "./Display.module.css";

function Display(props) {
  return (
    <>
      <section className={styles.display}>{props.children}</section>
    </>
  );
}

export default Display;
