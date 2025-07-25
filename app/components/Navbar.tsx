import Link from "next/link";
import Image from "next/image";

import Button from "./Button";

import styles from "./nav-bar.module.scss"

export default function NavBar() {   
    return (
        <header className={styles.navbar}>
            
            <Link href="/" className={styles.logo_area}>
                <Image
                    src="/personal-logo.svg"
                    width={100}
                    height={120}
                    alt="Alex Levy"
                />
                <div className={styles.line}></div>
                <p>Maps</p>
                </Link>
            <div className={styles.navlinks}>
                <Button
                link="/"
                variant="ghost"
                >Home</Button>
                <Button
                link="/about"
                variant="ghost"
                >About me</Button>
                <Button
                link="/contact"
                variant="primary"
                >Contact</Button>
            </div>
            
        </header>
    );
}