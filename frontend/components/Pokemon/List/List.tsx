import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Flex, Text } from "rebass";
import { Grid } from "../../Global/Style";
import React, {useContext} from "react";
import { PokemonContextType } from "../../../interfaces/Types";
import { PokemonContext } from "../../../contexts/Pokemon/PokemonContext";

export const PokemonList = () => {

  const router = useRouter()

  let { pokemons, filteredPokemons } = useContext(PokemonContext) as PokemonContextType

  if(filteredPokemons.length !== pokemons.length){
    pokemons = filteredPokemons
  }

  async function handleDetails(pokemonId: number){
    await router.push('/pokemon/' + pokemonId)
  }

  return (
    <Flex alignContent={"center"} justifyContent={"center"} flexWrap={"wrap"} width={"100%"}>
      {pokemons.map((pokemon) => (
          <Box width={["100%", "50%", "25%"]} textAlign={"center"}
               onClick={() => handleDetails(pokemon.id)} key={pokemon.id}
               className={"pokemonContainer"}
          >
            <h2 style={{cursor: "pointer"}}>{`#${pokemon.id} - ${pokemon.name}`}</h2>
            <Image style={{cursor: "pointer"}} width="80" height="80" src={pokemon.image} />
          </Box>
      ))}
    </Flex>
  );
}
