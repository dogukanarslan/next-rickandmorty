import styles from '../styles/DetailCard.module.css';

const LocationDetail = (props) => {
  const { name, type, dimension } = props.location;

  return (
    <div className={styles.detailCard}>
      <h4>{name}</h4>
      <h4>{type}</h4>
      <h4>{dimension}</h4>
    </div>
  );
};

export default LocationDetail;
