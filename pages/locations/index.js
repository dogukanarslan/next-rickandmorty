import styles from '../../styles/Table.module.css';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  const headers = ['Name', 'Type', 'Dimension'];

  return (
    <div className="row">
      <div className="col col-2">
        <Sidebar selected={router.pathname} />
      </div>
      <div className="col col-10">
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
                <td>{location.type}</td>
                <td>{location.dimension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
