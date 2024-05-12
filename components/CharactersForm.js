'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SelectInput from 'components/SelectInput';
import { generateQuery } from 'utils';

import Button from './Button';

import { filters } from '../constants';

const CharactersForm = () => {
  const searchParams = useSearchParams();

  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [gender, setGender] = useState(searchParams.get('gender') || '');

  const router = useRouter();

  const filterCharacters = (e) => {
    e.preventDefault();

    let url = `/characters?`;

    url += generateQuery([
      { label: 'status', value: status },
      { label: 'gender', value: gender }
    ]);

    router.push(url);
  };

  return (
    <form onSubmit={filterCharacters}>
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
  );
};

export default CharactersForm;
