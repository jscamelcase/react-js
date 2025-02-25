import styles from "./Home.module.css";

function Home({ children }) {
  return <main className={`${styles["home"]}`}>{children}</main>;
}

export default Home;
