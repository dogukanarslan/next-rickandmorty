'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { generateQuery } from '../utils';

import Button from './Button';
import TextInput from './TextInput';

import { filters } from '../constants';

const LocationsForm = () => {
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get('name') || '');
  const [dimension, setDimension] = useState(
    searchParams.get('dimension') || ''
  );

  const router = useRouter();

  const filterLocations = (e) => {
    e.preventDefault();

    let url = `/locations?`;

    url += generateQuery([
      { label: 'name', value: name },
      { label: 'dimension', value: dimension }
    ]);

    router.push(url);
  };

  return (
    <form onSubmit={filterLocations}>
      <TextInput
        value={name}
        options={filters.statuses}
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <TextInput
        value={dimension}
        options={filters.genders}
        label="Dimension"
        onChange={(e) => setDimension(e.target.value)}
      />

      <Button label="Search" />
    </form>
  );
};

export default LocationsForm;
