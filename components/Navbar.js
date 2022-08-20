import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">
          <a className={styles.navigationLink}>
            <Image
              src="/viktor.jpg"
              alt="back to home"
              width={64}
              height={64}
              className={styles.homeButtonImg}
            />
            Hem
          </a>
        </Link>
        <Link href="/bro">
          <a className={styles.navigationLink}>Bro</a>
        </Link>
      </nav>
    </>
  );
}
