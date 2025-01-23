import styles from "./ClearButton.module.css";

function ClearButton(props) {
  return (
    <div className="clear">
      <button className={styles.clear__button} onClick={props.deleteBirthDay}>
        Clearl All
      </button>
    </div>
  );
}

export default ClearButton;
