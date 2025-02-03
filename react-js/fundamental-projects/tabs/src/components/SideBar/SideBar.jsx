import styles from "./SideBar.module.css";

function SideBar(props) {
  console.log(props.data);
  return (
    <section className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        {props.data.map((item) => {
          return (
            <li
              key={item.id}
              className={styles.sidebar__item}
              style={
                props.selected === item.id
                  ? { borderLeft: "2px solid #14B8A6", color: "#14B8A6" }
                  : {}
              }
              onClick={() => props.onClick(item.id)}
            >
              {item.company}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SideBar;
