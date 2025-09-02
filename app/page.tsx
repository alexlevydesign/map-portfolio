import styles from "./page.module.scss";

import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import ImageScroll from "./components/ImageScroll";
import ContactForm from "./components/ContactForm";

import NewImageGrid from "./components/NewImageGrid";



export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
      <HeroSection />
      <NewImageGrid />
      <ContactForm /> 
      {/* <ImageGrid /> */}
      {/* <GsapTest /> */}
      </main>
    </div>
  );
}