import styles from "./SocialIcons.module.css";
import { social } from "./../../data";

function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      {social.map((platform) => {
        return (
          <a key={platform.id} href={platform.url}>
            {platform.icon}
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;
