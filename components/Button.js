import styles from '../styles/Button.module.css';

const Button = (props) => {
  const { label, ...args } = props;
  return (
    <button className={styles.btn} {...args}>
      {label}
    </button>
  );
};

export default Button;
