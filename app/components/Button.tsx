import Link from "next/link";
import styles from "./button.module.scss";





export default function Button({ children, link={}, variant='primary' }
    
) {
    const className = styles[`button_${variant}`];
    return (
        <Link href={link} className={className} >{children}</Link>
    );
}