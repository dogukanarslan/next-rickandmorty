import ViewButton from 'components/ViewButton';
import Wrapper from 'components/Wrapper';

import styles from 'styles/LocationList.module.css';

const LocationList = (props) => {
  const { locations } = props;

  return (
    <Wrapper>
      {locations.map((location) => (
        <div key={location.id} className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>{location.name}</h1>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>

            <div className={styles.buttonWrapper}>
              <ViewButton url={`/locations/${location.id}`} />
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default LocationList;
