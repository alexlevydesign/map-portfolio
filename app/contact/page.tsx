import styles from "./contact.module.scss";

import NavBar from "../components/Navbar";


export default function Contact() {
    return (
        <div className={styles.contact}>
            <NavBar />
            <h1>Get in touch!</h1>
        </div>
    );
}