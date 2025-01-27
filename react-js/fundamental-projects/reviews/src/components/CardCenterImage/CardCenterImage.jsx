import styles from "./CardCenterImage.module.css";

function CenterImage(props) {
  return (
    <div className={styles.profileImage}>
      <img className={styles.profileImage__src} src={props.imgSrc}></img>
    </div>
  );
}

export default CenterImage;
