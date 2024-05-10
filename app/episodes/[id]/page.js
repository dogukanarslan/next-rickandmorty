import styles from '../../../styles/EpisodeDetail.module.css';

const getData = async (id) => {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/episode/${id}`);

  return res.json();
};

const EpisodeDetailPage = async ({ params: { id } }) => {
  const { name, air_date, episode } = await getData(id);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.label}>Episode</h1>

      <div className={styles.boxItem}>
        <h1 className={styles.boxItemHeading}>Name</h1>
        <p>{name}</p>
      </div>

      <div className={styles.boxItem}>
        <h1 className={styles.boxItemHeading}>Air Date</h1>
        <p>{air_date}</p>
      </div>
      <div className={styles.boxItem}>
        <div className={styles.boxItemHeading}>Episode</div>
        <p>{episode}</p>
      </div>
    </div>
  );
};

export default EpisodeDetailPage;
