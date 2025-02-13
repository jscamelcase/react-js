import styles from "./Nav.module.css";
import { links } from "./../../data";
import { capitalizeFirstLetter } from "./../../utlils/stringUtil";
import { useRef, useEffect, useState } from "react";
function Nav(props) {
  const navList = useRef(null);
  const [navHeight, setNavHeight] = useState("90px");

  useEffect(() => {
    if (navList.current) {
      setNavHeight(`${navList.current.getBoundingClientRect().height}px`);
    }
  }, [props.displayed]); // Runs when `props.displayed` changes

  return (
    <nav
      style={{
        height:
          props.displayed && navList.current
            ? `${navList.current.getBoundingClientRect().height}px`
            : "0px",

        // overflow: props.displayed ? "visible" : "hidden",
      }}
    >
      <ul ref={navList} className={styles.nav__list}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a className={styles.nav__item} href={link.url}>
                {capitalizeFirstLetter(link.text)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
