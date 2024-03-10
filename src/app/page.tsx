import React from 'react';
import { Cover } from '../components';

const Home = () => {
  return (
    <main className="flex min-h-[100dvh] h-full bg-no-repeat bg-gradient-cover">
      <Cover />
      Introduction
    </main>
  );
};

export default Home;
