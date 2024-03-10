import React from 'react';
import { MotionTransaction } from '..';
import Link from 'next/link';
import { socialNetworks } from '@/constants/data';

const Header: React.FC = () => {
  return (
    <MotionTransaction
      position="bottom"
      className="absolute z-40 inline-block w-full"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex mt-5">
          <Link href={'/'}>
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Tuna
              <span className="text-secondary">Dev</span>
            </h1>
          </Link>

          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, id, src }) => {
              return (
                <Link
                  key={id}
                  href={src}
                  className="transition-all duration-300 hover:text-secondary"
                  target="_blank"
                >
                  {logo}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </MotionTransaction>
  );
};

export default Header;
