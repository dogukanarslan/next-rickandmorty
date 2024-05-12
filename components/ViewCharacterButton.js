'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Button from './Button';

const ViewCharacterButton = (props) => {
  const { id } = props;

  const router = useRouter();

  return (
    <Button label="View" onClick={() => router.push('/characters/' + id)} />
  );
};

export default ViewCharacterButton;
