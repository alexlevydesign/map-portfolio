import styles from "./page.module.scss";

import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import ImageScroll from "./components/ImageScroll";
import ImageGrid from "./components/ImageGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
      <HeroSection />
      <ImageGrid />
      {/* <ImageScroll /> */}
      </main>
    </div>
  );
}

//Features

// 1. Expand map on click

// 2. Change map size on scroll

//    1. Get % of viewport scrolled?
//    2. 