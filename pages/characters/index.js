import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { filters } from '../../constants';
import PaginationButtons from '../../components/PaginationButtons';
import SelectInput from '../../components/SelectInput';

import styles from '../../styles/Home.module.css';
import Button from '../../components/Button';

export async function getServerSideProps(context) {
  let url = `${process.env.RICKANDMORTY_API}/character?`;

  const { page = 1, status = '', gender = '' } = context.query;

  if (page) {
    url += `page=${page}`;
  }

  if (status) {
    url += `&status=${status}`;
  }

  if (gender) {
    url += `&gender=${gender}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      characters: data.results || [],
      info: data.info || {},
      currentFilters: {
        page,
        status,
        gender
      }
    }
  };
}

const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

const Characters = (props) => {
  const { characters, info, currentFilters } = props;

  const [status, setStatus] = useState(currentFilters.status);
  const [gender, setGender] = useState(currentFilters.gender);

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

  const filterCharacters = (e) => {
    e.preventDefault();

    let url = `/characters?`;
    if (gender) {
      url += `&gender=${gender}`;
    }

    if (status) {
      url += `&status=${status}`;
    }

    router.push(url);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Characters</title>
      </Head>
      <form className={styles.filters} onSubmit={filterCharacters}>
        <SelectInput
          value={status}
          options={filters.statuses}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
        />

        <SelectInput
          value={gender}
          options={filters.genders}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
        />

        <Button label="Search" />
      </form>

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

      <PaginationButtons
        changePage={changePage}
        currentPage={currentFilters.page}
      />
    </>
  );
};

export default Characters;
