import { useRouter } from 'next/router';

import PaginationButtons from '../../components/PaginationButtons';
import TextInput from '../../components/TextInput';

import styles from '../../styles/Locations.module.css';

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

const headers = ['Name', 'Type', 'Dimension'];

const Locations = (props) => {
  const { locations, info, currentPage } = props;

  const router = useRouter();

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
      <div className={styles.filters}>
        <TextInput placeholder="Name" label="Name" />
        <TextInput placeholder="Dimension" label="Dimension" />
      </div>

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

      <PaginationButtons changePage={changePage} currentPage={currentPage} />
    </>
  );
};

export default Locations;
