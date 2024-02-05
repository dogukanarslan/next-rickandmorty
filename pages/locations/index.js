import { useRouter } from 'next/router';
import styles from '../../styles/Table.module.css';
import PaginationButtons from '../../components/PaginationButtons';
import TextInput from '../../components/TextInput';

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.RICKANDMORTY_API}/location?page=${context.query.page}`
  );
  const data = await res.json();

  return {
    props: {
      locations: data.results,
      info: data.info,
      currentPage: context.query.page || 1
    }
  };
}

export default function Location(props) {
  const { locations, info, currentPage } = props;

  const router = useRouter();

  const headers = ['Name', 'Type', 'Dimension'];

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    router.push(`/locations?page=${page}`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <TextInput placeholder="Name" label="Name" />
          </div>
          <div className="col col-6">
            <TextInput placeholder="Dimension" label="Dimension" />
          </div>
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
                  {locations.map((location) => (
                    <tr
                      key={location.id}
                      onClick={() =>
                        router.push(`${router.pathname}/${location.id}`)
                      }
                    >
                      <td>{location.name}</td>
                      <td>{location.type}</td>
                      <td>{location.dimension}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <PaginationButtons changePage={changePage} currentPage={currentPage} />
      </div>
    </>
  );
}
