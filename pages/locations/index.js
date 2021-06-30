import styles from '../../styles/Table.module.css';
import Sidebar from '../../components/Sidebar';

export async function getStaticProps() {
  const res = await fetch('https://rickandmortyapi.com/api/location');
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default function Location(props) {
  const {
    data: { results: locations }
  } = props;

  const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

  return (
    <div className="row">
      <Sidebar />
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.status}</td>
              <td>{location.species}</td>
              <td>{location.type}</td>
              <td>{location.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
