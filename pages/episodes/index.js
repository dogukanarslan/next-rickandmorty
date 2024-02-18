import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from '../../styles/Episodes.module.css';

import PaginationButtons from '../../components/PaginationButtons';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export async function getServerSideProps(context) {
  let url = `${process.env.RICKANDMORTY_API}/episode?page=${context.query.page}`;

  const { page = 1, name = '', episode = '' } = context.query;

  if (page) {
    url += `&page=${page}`;
  }

  if (name) {
    url += `&name=${name}`;
  }

  if (episode) {
    url += `&name=${episode}`;
  }

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

  console.log(currentFilters)

  const [name, setName] = useState(currentFilters.name);
  const [episode, setEpisode] = useState(currentFilters.episode);

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    router.push(`/episodes?page=${page}`);
  };

  const filterEpisodes = (e) => {
    e.preventDefault();

    let url = `/episodes?`;

    if (name) {
      url += `&name=${name}`;
    }

    if (episode) {
      url += `&episode=${episode}`;
    }

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
