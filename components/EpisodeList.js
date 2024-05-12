import styles from '../styles/EpisodeList.module.css';
import ViewButton from './ViewButton';

const EpisodeList = (props) => {
  const { episodes } = props;

  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode.id} className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>{episode.name}</h1>
            <p>Episode: {episode.episode}</p>
            <div className={styles.buttonWrapper}>
              <ViewButton url={`/episodes/${episode.id}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
