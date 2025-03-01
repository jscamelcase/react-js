import styles from "./PageAsideLinkItem.module.css";
import React from "react";

function PageAsideLinkItem({ children, iconSize, iconColor }) {
  return (
    <div className={styles["page-aside__link-item"]}>
      {React.cloneElement(children[0], { size: iconSize, color: iconColor })}
      {children[1]}
    </div>
  );
}

export default PageAsideLinkItem;
