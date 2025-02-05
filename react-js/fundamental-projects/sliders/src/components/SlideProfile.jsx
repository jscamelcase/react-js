import { useState, useEffect } from "react";
import styles from "./SlideProfile.module.css";
import leftArrow from "./../assets/left.png";
import rightArrow from "./../assets/right.png";
import quotes from "./../assets/Quotes.png";
import { longList } from "../data";

function SlideProfile() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex(Math.floor(Math.random() * longList.length));
    }, 8000);
    return () => {
      clearInterval(slideInterval);
    };
  });

  const slideSection = longList.map((person, personIndex) => {
    return (
      <section
        key={person.id}
        className={styles.slide__container}
        style={{
          opacity: personIndex === index ? 1 : 0, // ✅ Hide non-active slides
          visibility: personIndex === index ? "visible" : "hidden", // ✅ Prevent interaction with hidden slides
          transform:
            personIndex === index ? "translateX(0)" : "translateX(-100%)", // ✅ Ensures non-active slides stay hidden
          position: personIndex === index ? "relative" : "absolute", // ✅ Avoids layout shifting
        }}
      >
        <img
          className={styles.slide__profileImage}
          src={person.image}
          alt="profile pic"
        />
        <h3 className={styles.slide__name}>{person.name}</h3>
        <h4 className={styles.slide__title}>{person.title}</h4>
        <p className={styles.slide__para}>{person.quote}</p>
        <img className={styles.slide__image} src={quotes} alt="quote symbol" />
      </section>
    );
  });

  return (
    <article className={styles.slideProfile}>
      <button
        className={styles.slide__button}
        onClick={() =>
          setIndex(
            (prevIndex) => (prevIndex - 1 + longList.length) % longList.length
          )
        }
      >
        <img src={leftArrow} alt="left arrow" />
      </button>

      <div className={styles.slide__div}>{slideSection}</div>

      <button
        className={styles.slide__button}
        onClick={() =>
          setIndex((prevIndex) => (prevIndex + 1) % longList.length)
        }
      >
        <img src={rightArrow} alt="right arrow" />
      </button>
    </article>
  );
}

export default SlideProfile;
