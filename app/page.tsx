import Image from "next/image";
import styles from "./page.module.scss";

import NavBar from "./components/NavBar";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
      <h1>Mapping impactful stories and striking landscapes</h1>
      <Button />
      </main>
    </div>
  );
}
