import styles from "./page.module.scss";

import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import ImageScroll from "./components/ImageScroll";
import ImageGrid from "./components/ImageGrid";

import NewImageGrid from "./components/NewImageGrid";

import GsapTest from "./components/GsapTest";



export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
      <HeroSection />
      <NewImageGrid />
      {/* <ImageGrid /> */}
      {/* <GsapTest /> */}
      </main>
    </div>
  );
}