import styles from "./Nav.module.css";
import { links } from "./../../data";
function Nav() {
  return (
    <nav>
      <ul className={styles.nav__list}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
