import styles from '../styles/TextInput.module.css';

const TextInput = (props) => {
  const { label, onChange, placeholder } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
