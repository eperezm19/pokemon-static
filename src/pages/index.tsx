import { CardPokemon } from "@components/card-pokemon";
import { GridCardPokemon } from "@components/card-pokemon/styles";
import { MainLayout } from "@layouts/index";
import pokeApi from "@services/pokeApi";
import { ProkemonListResponse, SmallPokemon } from "interface";
import type { GetStaticProps, NextPage } from "next";
interface Props {
  pokemons: SmallPokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout>
      <h1>Page Home</h1>
      <GridCardPokemon>
        {pokemons.map((poke) => (
          <CardPokemon key={poke.id} {...poke} />
        ))}
      </GridCardPokemon>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<ProkemonListResponse>(`pokemon?limit=151`);
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
