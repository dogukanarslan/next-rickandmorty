import Image from 'next/image';

import styles from 'styles/CharacterDetail.module.css';

const getData = async (id) => {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/character/${id}`);

  return res.json();
};

const CharacterDetailPage = async ({ params }) => {
  const { species, name, status, gender, image } = await getData(params.id);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.label}>Character</h1>

      <Image
        src={image}
        className={styles.image}
        alt="Character"
        width={150}
        height={150}
      />

      <div className={styles.boxItem}>
        <div className={styles.boxItemHeading}>Name</div>
        <p>{name}</p>
      </div>

      <div className={styles.boxItem}>
        <div className={styles.boxItemHeading}>Species</div>
        <p>{species}</p>
      </div>

      <div className={styles.boxItem}>
        <div className={styles.boxItemHeading}>Status</div>
        <p>{status}</p>
      </div>

      <div className={styles.boxItem}>
        <div className={styles.boxItemHeading}>Gender</div>
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
