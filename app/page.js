'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const HomePage = () => {
  useEffect(() => {
    redirect('/characters');
  }, []);

  return;
};

export default HomePage;
