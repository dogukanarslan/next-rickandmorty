import ViewButton from 'components/ViewButton';
import Wrapper from 'components/Wrapper';

import styles from 'styles/EpisodeList.module.css';

const EpisodeList = (props) => {
  const { episodes } = props;

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default EpisodeList;
