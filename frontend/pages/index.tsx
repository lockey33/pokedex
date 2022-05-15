import type { NextPage } from 'next'
import React  from "react";
import { Box } from "rebass";
import { PokemonList } from '../components/Pokemon/List/List'
import Search from '../components/Pokemon/Search/Search';
import { MetaPokemon } from '../interfaces/Types';
import PokemonProvider from '../contexts/Pokemon/PokemonContext';


export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/pokemons")
  const data = await res.json()
  return {
    props: { pokemons: data},
  };
}


const Home: NextPage<{pokemons:MetaPokemon[]|null}> = ({pokemons}) => {
  return pokemons ?
      <PokemonProvider initialData={pokemons}>
          <Box>
              <Search />
              <PokemonList />
          </Box>
      </PokemonProvider>
     :
      <div>Loading...</div>
}

export default Home
