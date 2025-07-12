import styles from "./contact.module.scss";

import NavBar from "../components/Navbar";
import Button from "./components/Button";
import Layout from "../layout";


export default function Contact() {
    return (
        <div className={styles.contact}>
            <NavBar />
            <h1>Get in touch!</h1>
        </div>
    );
}