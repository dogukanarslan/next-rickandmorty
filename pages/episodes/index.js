import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from '../../styles/Episodes.module.css';

import PaginationButtons from '../../components/PaginationButtons';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import { generateQuery } from '../../utils';

export async function getServerSideProps(context) {
  let url = `${process.env.RICKANDMORTY_API}/episode?`;

  const { page = 1, name = '', episode = '' } = context.query;

  url += generateQuery([
    { label: 'page', value: page },
    { label: 'name', value: name },
    { label: 'episode', value: episode }
  ]);

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      episodes: data.results || [],
      info: data.info || {},
      currentFilters: {
        page,
        name,
        episode
      }
    }
  };
}

const headers = ['Name', 'Air Date', 'Episode'];

const Episodes = (props) => {
  const { episodes, info, currentFilters } = props;

  const [name, setName] = useState(currentFilters.name);
  const [episode, setEpisode] = useState(currentFilters.episode);

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    let url = `/episodes?`;

    url += generateQuery([
      { label: 'page', value: page },
      { label: 'name', value: name },
      { label: 'episode', value: episode }
    ]);

    router.push(url);
  };

  const filterEpisodes = (e) => {
    e.preventDefault();

    let url = `/episodes?`;

    url += generateQuery([
      { label: 'name', value: name },
      { label: 'episode', value: episode }
    ]);

    router.push(url);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Episodes</title>
      </Head>
      <form className={styles.filters} onSubmit={filterEpisodes}>
        <TextInput
          placeholder="Name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          placeholder="Episode"
          label="Episode"
          value={episode}
          onChange={(e) => setEpisode(e.target.value)}
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
          {episodes.map((episode) => (
            <tr
              key={episode.id}
              onClick={() => router.push(`${router.pathname}/${episode.id}`)}
            >
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
              <td>{episode.episode}</td>
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

export default Episodes;
