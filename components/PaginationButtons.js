import Button from './Button';
import styles from '../styles/PaginationButtons.module.css';

const PaginationButtons = (props) => {
  const { data, info } = props;

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col col-6">
          <Button label="Previous" />
        </div>
        <div className={`col col-6 ${styles.center}`}>
          <span className={styles.page}>
            {data.length} / {info.count}
          </span>
        </div>
        <div className={`col col-6 ${styles.right}`}>
          <Button label="Next" />
        </div>
      </div>
    </div>
  );
};

export default PaginationButtons;
