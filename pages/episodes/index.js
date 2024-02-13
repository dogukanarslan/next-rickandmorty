import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from '../../styles/Episodes.module.css';

import PaginationButtons from '../../components/PaginationButtons';
import TextInput from '../../components/TextInput';

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.RICKANDMORTY_API}/episode?page=${context.query.page}`
  );
  const data = await res.json();

  return {
    props: {
      episodes: data.results,
      info: data.info,
      currentPage: context.query.page || 1
    }
  };
}

const headers = ['Name', 'Air Date', 'Episode'];

const Episodes = (props) => {
  const { episodes, info, currentPage } = props;

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    router.push(`/episodes?page=${page}`);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Episodes</title>
      </Head>
      <div className={styles.filters}>
        <TextInput placeholder="Name" label="Name" />
        <TextInput placeholder="Episode" label="Episode" />
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

      <PaginationButtons changePage={changePage} currentPage={currentPage} />
    </>
  );
};

export default Episodes;
