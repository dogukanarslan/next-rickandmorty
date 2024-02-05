import { useRouter } from 'next/router';
import styles from '../../styles/Table.module.css';
import { filters } from '../../constants';
import PaginationButtons from '../../components/PaginationButtons';
import SelectInput from '../../components/SelectInput';

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.RICKANDMORTY_API}/character?page=${context.query.page}`
  );
  const data = await res.json();

  return {
    props: {
      characters: data.results,
      info: data.info,
      currentPage: context.query.page || 1
    }
  };
}

const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

export default function Home(props) {
  const { characters, info, currentPage } = props;

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    router.push(`/characters?page=${page}`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <SelectInput options={filters.statuses} label="Status" />
          </div>
          <div className="col col-6">
            <SelectInput options={filters.genders} label="Gender" />
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
          </div>
        </div>
        <PaginationButtons changePage={changePage} currentPage={currentPage} />
      </div>
    </>
  );
}
