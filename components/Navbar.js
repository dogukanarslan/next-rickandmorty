import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = (props) => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <ul>
        <li>Rick and Morty</li>
        <li className={styles.title}>{router.pathname.slice(1)}</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
