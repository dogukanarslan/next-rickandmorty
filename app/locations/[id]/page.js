import styles from '../../../styles/LocationDetail.module.css';

const getData = async (id) => {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/location/${id}`);
  const data = await res.json();

  return data;
};

const LocationDetailPage = async ({ params: { id } }) => {
  const data = await getData(id);

  const { name, type, dimension } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <h1 className={styles.label}>Location</h1>

        <div className={styles.boxItem}>
          <h1 className={styles.boxItemHeading}>Name</h1>
          <p>{name}</p>
        </div>
        <div className={styles.boxItem}>
          <h1 className={styles.boxItemHeading}>Type</h1>
          <p>{type}</p>
        </div>
        <div className={styles.boxItem}>
          <div className={styles.boxItemHeading}>Dimension</div>
          <p>{dimension}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailPage;
