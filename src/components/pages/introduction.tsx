'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Introduction: React.FC = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src={'/home-4.png'}
          priority
          width={'700'}
          height={'700'}
          alt="profile pic"
        />

        <div className="flex flex-col justify-center max-w-xl md:max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            <span>Tuna Dev, </span>
            <TypeAnimation
              sequence={['Frontend', 1000, 'Strapi', 1000, 'Appsmith', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            dolorum tempora est laborum placeat ad natus itaque, eligendi
            cupiditate velit soluta commodi quasi pariatur fuga sunt ipsum quo
            reiciendis nisi!
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href={'/projects'}
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              View Projects
            </Link>

            <Link
              href={'#'}
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md text-secondary border-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              View CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
