import { generateQuery } from '../../utils';

import PaginationButtons from '../../components/PaginationButtons';
import CharactersForm from '../../components/CharactersForm';

import styles from '../../styles/Home.module.css';
import CharacterRow from '../../components/CharacterRow';

const getData = async (params) => {
  let url = `${process.env.RICKANDMORTY_API}/character?`;

  const { page = 1, status = '', gender = '' } = params;

  url += generateQuery([
    { label: 'page', value: page },
    { label: 'status', value: status },
    { label: 'gender', value: gender }
  ]);

  const res = await fetch(url);

  return res.json();
};

const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

const CharactersPage = async (props) => {
  const { results: characters, info } = await getData(props.searchParams);

  return (
    <>
      <CharactersForm />
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
            <CharacterRow key={character.id} character={character} />
          ))}
        </tbody>
      </table>

      <PaginationButtons
        info={info}
        currentPage={props.searchParams.page || 1}
      />
    </>
  );
};

export default CharactersPage;
