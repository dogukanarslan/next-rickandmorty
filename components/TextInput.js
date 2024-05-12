import styles from 'styles/TextInput.module.css';

const TextInput = (props) => {
  const { value, label, onChange, placeholder } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
