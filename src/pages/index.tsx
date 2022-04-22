import { MainLayout } from '@layouts/index';
import pokeApi from '@services/pokeApi';
import { ProkemonListResponse, SmallPokemon } from 'interface';
import type { GetStaticProps, NextPage } from 'next';
interface Props {
  pokemons: SmallPokemon[]
}
const Home: NextPage<Props> = ({pokemons}) => {
 
  return (
    <MainLayout>
      <h1>Page Home</h1>
      <ul>
        {
          pokemons.map(({name, id}) => (
            <li key={id} style={{color: 'white'}}>{name}</li>
          ))
        }
      </ul>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<ProkemonListResponse>(`pokemon?limit=151`)
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}`
  }))
  return{
    props: {
      pokemons
    }
  }
}

export default Home;
