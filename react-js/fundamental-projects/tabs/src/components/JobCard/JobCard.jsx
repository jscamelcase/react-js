import styles from "./JobCard.module.css";

function JobCard() {
  return (
    <section className={styles.card}>
      <div className="card__title">
        <h3 className="card__heading">Full Stack Developer</h3>
        <h4 className="card__company">TOMMY</h4>
        <h5 className="card__dates">December 2015 - Present</h5>
      </div>
      <ul className={styles.card__list}>
        <li className={styles.card__item}>
          Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
          leggings offal cold-pressed brunch neutra. Hammock photo booth
          live-edge disrupt.
        </li>
        <li className={styles.card__item}>
          Post-ironic selvage chambray sartorial freegan meditation. Chambray
          chartreuse kombucha meditation, man bun four dollar toast street art
          cloud bread live-edge heirloom.
        </li>
        <li className={styles.card__item}>
          Butcher drinking vinegar franzen authentic messenger bag copper mug
          food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas
          single-origin coffee franzen cloud bread tilde vegan flexitarian.
        </li>
      </ul>
    </section>
  );
}

export default JobCard;
