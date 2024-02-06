import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__nav}>
        <li className={styles.navbar__logo}>Rick and Morty</li>
        <li className={styles.navbar__title}>{router.pathname.slice(1)}</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
