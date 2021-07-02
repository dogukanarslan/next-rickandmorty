import styles from '../../styles/Table.module.css';

export async function getStaticProps() {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/episode`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default function Episode(props) {
  const {
    data: { results: episodes }
  } = props;

  const headers = ['Name', 'Air Date', 'Episode'];

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
        {episodes.map((episode) => (
          <tr key={episode.id}>
            <td>{episode.name}</td>
            <td>{episode.air_date}</td>
            <td>{episode.episode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
