import styles from "./PageAside.module.css";
import { useContext } from "react";
import { PageContext } from "./../../contexts/PageContext";

function PageAside({ children }) {
  const { asideToggle, setAsideToggle } = useContext(PageContext);
  return (
    <aside
      className={
        asideToggle
          ? `${styles["aside"]}`
          : `${styles["aside"]} ${styles["aside--hide"]}`
      }
    >
      {children}
    </aside>
  );
}

export default PageAside;
