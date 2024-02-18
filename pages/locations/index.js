import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import PaginationButtons from '../../components/PaginationButtons';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import { generateQuery } from '../../utils';

import styles from '../../styles/Locations.module.css';

export async function getServerSideProps(context) {
  let url = `${process.env.RICKANDMORTY_API}/location?`;

  const { page = 1, name = '', dimension = '' } = context.query;

  url += generateQuery([
    { label: 'page', value: page },
    { label: 'name', value: name },
    { label: 'dimension', value: dimension }
  ]);

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      locations: data.results || [],
      info: data.info || {},
      currentFilters: {
        page,
        name,
        dimension
      }
    }
  };
}

const headers = ['Name', 'Type', 'Dimension'];

const Locations = (props) => {
  const { locations, info, currentFilters } = props;

  const [name, setName] = useState(currentFilters.name);
  const [dimension, setDimension] = useState(currentFilters.dimension);

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    let url = `/locations?`;

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    url += generateQuery([
      { label: 'page', value: page },
      { label: 'name', value: name },
      { label: 'dimension', value: dimension }
    ]);

    router.push(url);
  };

  const searchLocation = (e) => {
    e.preventDefault();

    let url = `/locations?`;

    url += generateQuery([
      { label: 'name', value: name },
      { label: 'dimension', value: dimension }
    ]);

    router.push(url);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Locations</title>
      </Head>

      <form onSubmit={searchLocation} className={styles.filters}>
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          label="Name"
        />
        <TextInput
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
          placeholder="Dimension"
          label="Dimension"
        />
        <Button label="Search" onClick={searchLocation} />
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

      <PaginationButtons
        changePage={changePage}
        currentPage={currentFilters.page}
      />
    </>
  );
};

export default Locations;
