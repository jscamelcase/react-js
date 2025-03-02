import React from "react";
import styles from "./PageAsideSocialLink.module.css";

function PageAsideSocialLink({ children, href, iconSize, iconColor }) {
  console.log("Children received:", children);

  // Ensure children is an array using React.Children.toArray
  const childrenArray = React.Children.toArray(children);

  return (
    <a href={href} className={styles["page-aside__social-link"]}>
      {childrenArray.length > 0 && React.isValidElement(childrenArray[0])
        ? React.cloneElement(childrenArray[0], {
            size: iconSize,
            color: iconColor,
          })
        : null}
    </a>
  );
}

export default PageAsideSocialLink;
