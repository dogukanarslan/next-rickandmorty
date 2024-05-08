import Image from 'next/image';
import styles from '../../../styles/CharacterDetail.module.css';

const getData = async (id) => {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/character/${id}`);

  return res.json();
};

const CharacterDetailPage = async ({ params }) => {
  const { species, name, status, gender, image } = await getData(params.id);

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

export default CharacterDetailPage;
