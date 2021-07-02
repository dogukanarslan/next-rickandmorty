import styles from '../../styles/Table.module.css';

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
    data: { results: characters }
  } = props;

  const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

  return (
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
          <tr key={character.id}>
            <td>{character.name}</td>
            <td>{character.status}</td>
            <td>{character.species}</td>
            <td>{character.type}</td>
            <td>{character.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
