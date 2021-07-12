import styles from '../styles/Navbar.module.css';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <a className={styles.navLogo}>Rick and Morty</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Contact</a>
        </li>
      </ul>
      <Button label={'Light'} />
    </nav>
  );
};

export default Navbar;
