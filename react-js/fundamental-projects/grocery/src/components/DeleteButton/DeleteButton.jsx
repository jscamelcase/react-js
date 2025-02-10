import styles from "./DeleteButton.module.css";

function DeleteButton(props) {
  const { product, onClick } = props;
  return (
    <>
      <button
        onClick={() => {
          onClick(product);
        }}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </>
  );
}

export default DeleteButton;
