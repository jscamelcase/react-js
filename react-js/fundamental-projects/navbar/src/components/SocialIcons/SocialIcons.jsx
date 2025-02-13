import styles from "./SocialIcons.module.css";
import { social } from "./../../data";
import React from "react";

function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      {social.map((platform) => {
        return (
          <div key={platform.id} className={styles.socialIcon__container}>
            <a href={platform.url}>
              {React.cloneElement(platform.icon, {
                style: { color: "#49a6e9", fontSize: "16px" },
              })}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialIcons;
