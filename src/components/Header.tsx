import { Navbar } from '@common/index';
import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <div>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <h2>P</h2>
      <h3>okemon</h3>
      <Navbar />
    </div>
  );
};
