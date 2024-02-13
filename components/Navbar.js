import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__nav}>
        <li className={styles.navbar__logo}>Rick and Morty</li>
      </ul>
    </div>
  );
};

export default Navbar;
