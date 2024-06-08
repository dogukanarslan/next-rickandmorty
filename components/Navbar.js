import Link from 'next/link';
import styles from 'styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">Rick and Morty</Link>
      </div>
      <ul className={styles.navbar__nav}>
        <li>
          <Link href="/characters">Characters</Link>
        </li>
        <li>
          <Link href="/locations">Locations</Link>
        </li>
        <li>
          <Link href="/episodes">Episodes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
