import styles from "./Item.module.css";

function Item(props) {
  const { alt, image, name, age, id } = props.birthDay;
  return (
    <div className={styles.item}>
      <img src={image} alt={alt} className={styles.item__image} />
      <div className={styles.item__description}>
        <div className={styles.item__text}>
          <h3 className={styles.item__name}>{name}</h3>
          <p className={styles.item__years}>{age} years</p>
        </div>
      </div>
      <div className={styles.item__clear}>
        <button
          className={styles.item__clearbutton}
          onClick={() => props.deleteOnClick(id)}
          type="button"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Item;
