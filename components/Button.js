import styles from 'styles/Button.module.css';

const Button = (props) => {
  const { label, color = 'secondary', ...args } = props;

  let classes = `${styles.btn}`;

  if (color === 'primary') {
    classes += ` ${styles.primary}`;
  }

  if (color === 'secondary') {
    classes += ` ${styles.secondary}`;
  }

  return (
    <button className={classes} {...args}>
      {label}
    </button>
  );
};

export default Button;
