'use client';

import Button from 'components/Button';
import { usePathname, useRouter } from 'next/navigation';
import { generateQuery } from 'utils';
import styles from 'styles/PaginationButtons.module.css';

const PaginationButtons = (props) => {
  const { info, currentPage } = props;

  const router = useRouter();
  const pathname = usePathname();

  const changePage = (type) => {
    if (!info[type]) {
      return;
    }

    const searchParams = new URL(info[type]).searchParams;
    const page = searchParams.get('page');
    const status = searchParams.get('status');
    const gender = searchParams.get('gender');
    const name = searchParams.get('name');
    const episode = searchParams.get('episode');
    const dimension = searchParams.get('dimension');

    const url = `${pathname}?${generateQuery([
      { label: 'page', value: page },
      { label: 'status', value: status },
      { label: 'gender', value: gender },
      { label: 'name', value: name },
      { label: 'episode', value: episode },
      { label: 'dimension', value: dimension }
    ])}`;

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
