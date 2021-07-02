import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = (props) => {
  const { selected } = props;

  return (
    <div className={styles.sidebar}>
      <Link href="/characters">
        <a className={selected === '/characters' ? styles.active : ''}>Characters</a>
      </Link>
      <Link href="/locations">
        <a className={selected === '/locations' ? styles.active : ''}>
          Locations
        </a>
      </Link>
      <Link href="/episodes">
        <a className={selected === '/episodes' ? styles.active : ''}>
          Episodes
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
