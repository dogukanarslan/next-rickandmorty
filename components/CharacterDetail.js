import Image from 'next/image';
import styles from '../styles/CharacterDetail.module.css';

const CharacterDetail = (props) => {
  const { name, status, gender, image, species } = props.character;

  console.log(props.character);

  return (
    <div className={styles.wrapper}>
      <Image
        src={image}
        className={styles.image}
        alt="Character"
        width={250}
        height={250}
      />

      <div className={styles.details}>
        <h1>{name}</h1>
        <p>{species}</p>
        <p>{status}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
