import Image from 'next/image';

import styles from '../styles/CharacterList.module.css';
import ViewButton from './ViewButton';

const CharacterList = (props) => {
  const { characters } = props;

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id} className={styles.card}>
          <Image
            className={styles.image}
            src={character.image}
            width={100}
            height={100}
            alt="Character image"
          />
          <div className={styles.info}>
            <h1 className={styles.title}>{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <div className={styles.buttonWrapper}>
              <ViewButton url={`/characters/${character.id}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
