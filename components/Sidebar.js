import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link href="/">
        <a>Characters</a>
      </Link>
      <Link href="/locations">
        <a>Locations</a>
      </Link>
      <Link href="/episodes">
        <a>Episodes</a>
      </Link>
    </div>
  );
};

export default Sidebar;
