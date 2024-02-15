import styles from '../styles/CharacterDetail.module.css';

const LocationDetail = (props) => {
  const { name, type, dimension } = props.location;

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <h1>{name}</h1>
        <p>{type}</p>
        <p>{dimension}</p>
      </div>
    </div>
  );
};

export default LocationDetail;
