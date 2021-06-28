import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a>Characters</a>
      <a>Episodes</a>
      <a>Locations</a>
    </div>
  );
};

export default Sidebar;
