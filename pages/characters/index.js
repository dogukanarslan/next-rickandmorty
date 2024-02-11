import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { filters } from '../../constants';
import PaginationButtons from '../../components/PaginationButtons';
import SelectInput from '../../components/SelectInput';

export async function getServerSideProps(context) {
  let url = `${process.env.RICKANDMORTY_API}/character?`;
  if (context.query.page) {
    url += `page=${context.query.page}`;
  }

  if (context.query.status) {
    url += `&status=${context.query.status}`;
  }

  if (context.query.gender) {
    url += `&gender=${context.query.gender}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      characters: data.results || [],
      info: data.info || {},
      currentPage: context.query.page || 1,
      status: context.query.status || '',
      gender: context.query.gender || ''
    }
  };
}

const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

export default function Home(props) {
  const { characters, info, currentPage, status, gender } = props;

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    let url = `/characters?page=${page}`;

    if (status) {
      url += `&status=${status}`;
    }

    router.push(url);
  };

  const changeStatus = (status) => {
    let url = `/characters?status=${status}`;
    if (gender) {
      url += `&gender=${gender}`;
    }

    if (currentPage) {
      url += `&page=${currentPage}`;
    }
    router.push(url);
  };

  const changeGender = (gender) => {
    let url = `/characters?gender=${gender}`;

    if (status) {
      url += `&status=${status}`;
    }

    if (currentPage) {
      url += `&page=${currentPage}`;
    }
    router.push(url);
  };

  return (
    <>
      <div className={styles.filters}>
        <SelectInput
          value={status}
          options={filters.statuses}
          label="Status"
          onChange={(e) => changeStatus(e.target.value)}
        />

        <SelectInput
          value={gender}
          options={filters.genders}
          label="Gender"
          onChange={(e) => changeGender(e.target.value)}
        />
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
          {characters.map((character) => (
            <tr
              key={character.id}
              onClick={() => router.push(`${router.pathname}/${character.id}`)}
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

      <PaginationButtons changePage={changePage} currentPage={currentPage} />
    </>
  );
}
