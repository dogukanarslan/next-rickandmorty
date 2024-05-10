'use client';

import Button from './Button';
import { useRouter } from 'next/navigation';
import { generateQuery } from '../utils';
import styles from '../styles/PaginationButtons.module.css';

const PaginationButtons = (props) => {
  const { info, currentPage } = props;

  const router = useRouter();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');

    let url = `/characters?`;

    url += generateQuery([{ label: 'page', value: page }]);

    router.push(url);
  };

  return (
    <div className={styles.wrapper}>
      <Button label="&#9204;" onClick={() => changePage('prev')} />
      <h1 className={styles.title}>{currentPage}</h1>
      <Button label="&#9205;" onClick={() => changePage('next')} />
    </div>
  );
};

export default PaginationButtons;
