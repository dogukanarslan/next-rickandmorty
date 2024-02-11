import styles from '../styles/SelectInput.module.css';

const SelectInput = (props) => {
  const { label, onChange, options, value } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} onChange={onChange} value={value}>
        <option value="" />
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
