import styles from "./PageContainer.module.css";

function PageContainer(props) {
  return <main className={styles.pageContainer}>{props.children}</main>;
}

export default PageContainer;
