import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import PaginationButtons from '../../components/PaginationButtons';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import styles from '../../styles/Locations.module.css';

export async function getServerSideProps(context) {
  let url = `${process.env.RICKANDMORTY_API}/location?`;

  const { page = 1, name = '', dimension = '' } = context.query;

  if (page) {
    url += `&page=${page}`;
  }

  if (name) {
    url += `&name=${name}`;
  }

  if (dimension) {
    url += `&dimension=${dimension}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      locations: data.results || [],
      info: data.info || {},
currentPage: context.query.page || 1,
      filters: {
        currentPage: page,
        currentName: name,
        currentDimension: dimension
      }
    }
  };
}

const headers = ['Name', 'Type', 'Dimension'];

const Locations = (props) => {
  const { locations, info, currentPage, filters } = props;

  const [name, setName] = useState(filters.currentName);
  const [dimension, setDimension] = useState(filters.currentDimension);

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    let url = `/locations?`;

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    if (page) {
      url += `&page=${page}`;
    }

    if (name) {
      url += `&name=${name}`;
    }

    if (dimension) {
      url += `&dimension=${dimension}`;
    }

    router.push(url);
  };

  const searchLocation = (e) => {
    e.preventDefault();

    let url = `/locations?`;

    if (name) {
      url += `&name=${name}`;
    }

    if (dimension) {
      url += `&dimension=${dimension}`;
    }

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

      <PaginationButtons changePage={changePage} currentPage={currentPage} />
    </>
  );
};

export default Locations;
