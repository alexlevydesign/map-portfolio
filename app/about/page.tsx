import styles from "./about.module.scss";

import NavBar from "../components/Navbar";
// import Button from "./components/Button";



export default function About() {
    return (
        <div className={styles.about}>
            <NavBar />
            <h1>About me</h1>
        </div>
    );
}