import { CardDetailPokemon } from "@components/card-detail-pokemon";
import { Container } from "@components/card-detail-pokemon/styles";
import { StyledCardPokemon } from "@components/card-pokemon/styles";
import { MainLayout } from "@layouts/main-layout";
import pokeApi from "@services/pokeApi";
import { Pokemon } from "interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  pokemon: Pokemon;
}

const PagePokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout>
      <Container>
        <CardDetailPokemon pokemon={pokemon} />
      </Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PagePokemon;
