import { useRouter } from 'next/router';
import styles from '../../styles/Table.module.css';
import Button from '../../components/Button';

export async function getStaticProps() {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/character`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default function Home(props) {
  const {
    data: { results: characters, info }
  } = props;

  const router = useRouter();

  const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

  return (
    <>
      <div className="scrollable-container">
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr
                key={character.id}
                onClick={() =>
                  router.push(`${router.pathname}/${character.id}`)
                }
              >
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
                <td>{character.type}</td>
                <td>{character.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <Button label="Previous" />
        <span>
          {characters.length} / {info.count}
        </span>
        <Button label="Next" />
      </div>
    </>
  );
}
