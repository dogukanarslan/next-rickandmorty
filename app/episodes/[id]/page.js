import styles from '../../../styles/EpisodeDetail.module.css';

const getData = async (id) => {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/episode/${id}`);

  return res.json();
};

const EpisodeDetailPage = async ({ params: { id } }) => {
  const { name, air_date, episode } = await getData(id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <h1>{name}</h1>
        <p>{air_date}</p>
        <p>{episode}</p>
      </div>
    </div>
  );
};

export default EpisodeDetailPage;
