import { useRouter } from 'next/router';
import styles from '../../styles/Table.module.css';
import Button from '../../components/Button';

export async function getStaticProps() {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/location`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default function Location(props) {
  const {
    data: { results: locations, info }
  } = props;

  const router = useRouter();

  const headers = ['Name', 'Type', 'Dimension'];

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
            {locations.map((location) => (
              <tr
                key={location.id}
                onClick={() => router.push(`${router.pathname}/${location.id}`)}
              >
                <td>{location.name}</td>
                <td>{location.type}</td>
                <td>{location.dimension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <Button label="Previous" />
        <span>
          {locations.length} / {info.count}
        </span>
        <Button label="Next" />
      </div>
    </>
  );
}
