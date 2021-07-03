import styles from '../styles/DetailCard.module.css';

const EpisodeDetail = (props) => {
  const { name, air_date, episode } = props.episode;

  return (
    <div className={styles.detailCard}>
      <h4>{name}</h4>
      <h4>{air_date}</h4>
      <h4>{episode}</h4>
    </div>
  );
};

export default EpisodeDetail;
