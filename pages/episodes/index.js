import { useRouter } from 'next/router';
import styles from '../../styles/Table.module.css';
import PaginationButtons from '../../components/PaginationButtons';

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
    data: { results: episodes, info }
  } = props;

  const router = useRouter();

  const headers = ['Name', 'Air Date', 'Episode'];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-6"></div>
          <div className="col col-6"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-12">
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
                  {episodes.map((episode) => (
                    <tr
                      key={episode.id}
                      onClick={() =>
                        router.push(`${router.pathname}/${episode.id}`)
                      }
                    >
                      <td>{episode.name}</td>
                      <td>{episode.air_date}</td>
                      <td>{episode.episode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <PaginationButtons data={episodes} info={info} />
      </div>
    </>
  );
}
