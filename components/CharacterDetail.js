import Image from 'next/image';
import styles from '../styles/DetailCard.module.css';
const CharacterDetail = (props) => {
  const { name, gender, image } = props.character;

  return (
    <div className={styles.detailCard}>
      <Image src={image} alt="Character" width={200} height={200} />
      <h4>{name}</h4>
      <h4>{gender}</h4>
    </div>
  );
};

export default CharacterDetail;
