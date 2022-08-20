import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>
          <Image
            src="/viktor.jpg"
            alt="back to home"
            width={64}
            height={64}
            className={styles.homeButtonImg}
          />
        </a>
      </Link>
      <Link href="/bro">
        <a>Bro</a>
      </Link>
    </nav>
  );
}
