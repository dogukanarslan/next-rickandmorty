import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link href="/characters">Characters</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/episodes">Episodes</Link>
    </div>
  );
};

export default Sidebar;
