import Link from "next/link";

export default function NavBar() {   
    return (
        <header>
            <Link href="/">Alex Levy Maps</Link>
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
            <Link href="/contact">Contact me</Link>
        </header>
    );
}