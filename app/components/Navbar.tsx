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
                children="Home"
                link="/"
                variant="ghost"
                />
                <Button
                children="About me"
                link="/about"
                variant="ghost"
                />
                <Button
                children="Contact"
                link="/contact"
                variant="primary"
                />
            </div>
            
        </header>
    );
}