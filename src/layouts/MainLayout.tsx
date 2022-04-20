import React, { FC } from 'react';
import Head from 'next/head';
import { Header } from '@components/index';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};
export const MainLayout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title} || Pokemon App</title>
        <meta name='author' content='Noel Perez' />
        <meta
          name='description'
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name='keywords' content={`${title} pokemon, pokedex`} />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};
