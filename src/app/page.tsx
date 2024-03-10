import React from 'react';
import { Cover } from '../components';
import TransactionPage from '@/components/transition-page';

const Home = () => {
  return (
    <main>
      <TransactionPage />
      <div className="flex min-h-[100dvh] h-full bg-no-repeat bg-gradient-cover">
        <Cover />
        Introduction
      </div>
    </main>
  );
};

export default Home;
