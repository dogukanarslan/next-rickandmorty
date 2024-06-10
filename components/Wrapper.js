import styles from 'styles/Wrapper.module.css';

const Wrapper = (props) => {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
