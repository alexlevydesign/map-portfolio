import styles from "./hero-section.module.scss";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_layer}>
        <Image
          src="/hero-mockup-v3.jpg"
          width={1920}
          height={1080}
          alt="Image"
          className={styles.hero_image}
        />
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_text}>
          <h1>
            Mapping <b className={styles.bold}>impactful</b> stories and <i>striking</i> landscapes
          </h1>
          {/* <p>
            I design maps that tell unique stories and provide normally unseen points of view, from
            mapping the relationship between voting and education, to visualizing the terrain of the
            Swiss Alps.
          </p> */}
        </div>
      </div>
    </div>
  );
}
