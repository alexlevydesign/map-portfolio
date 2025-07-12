import Image from "next/image";
import styles from "./page.module.scss";

import NavBar from "./components/Navbar";
import Button from "./components/Button";
import ImageGrid from "./components/ImageGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
      <h1>Mapping <b className={styles.bold}>impactful</b> stories and <i>striking</i> landscapes</h1>
      <ImageGrid />
      </main>
    </div>
  );
}
