'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Button from './Button';

const ViewButton = (props) => {
  const { url } = props;

  const router = useRouter();

  return <Button label="View" onClick={() => router.push(url)} />;
};

export default ViewButton;
