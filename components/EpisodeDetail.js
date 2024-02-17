import styles from '../styles/EpisodeDetail.module.css';

const EpisodeDetail = (props) => {
  const { name, air_date, episode } = props.episode;

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

export default EpisodeDetail;
