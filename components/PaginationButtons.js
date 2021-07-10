import Button from './Button';
import styles from '../styles/PaginationButtons.module.css';

const PaginationButtons = (props) => {
  const { data, info } = props;

  return (
    <div className={styles.container}>
      <Button label="Previous" />
      <span className={styles.page}>
        {data.length} / {info.count}
      </span>
      <Button label="Next" />
    </div>
  );
};

export default PaginationButtons;
