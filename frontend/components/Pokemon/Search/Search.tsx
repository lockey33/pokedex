import React, {useContext, useRef, useState} from "react";
import { Flex, Text, Box, Button } from "rebass";
import {PrimaryButton, TestButton} from "../../Global/Style";
import { Label, Input } from '@rebass/forms'
import {PokemonContext} from "../../../contexts/Pokemon/PokemonContext";
import {MetaPokemon, PokemonContextType} from "../../../interfaces/Types";

const Search = () => {
    const { pokemons, setFilteredPokemons } = useContext(PokemonContext) as PokemonContextType
    const [ searchQuery, setSearchQuery ] = useState("")

    function liveSearch(event: React.ChangeEvent<HTMLInputElement>){
        const target = event.target as HTMLInputElement
        const value = target.value

        setSearchQuery(value)

        let filtered = pokemons.filter((pokemon:MetaPokemon) => {
            if (pokemon.name.toLowerCase().includes(value.toLowerCase())) return pokemon
        })

        setFilteredPokemons(filtered)

    }

    function resetPokemons(){
        setSearchQuery("")
        setFilteredPokemons(pokemons)
    }

    return(
        <Flex justifyContent="center" p={3}>
            <Box textAlign="center" alignItems="center" width="50%">
                <Label pb={2} htmlFor="pokemoName">Search for a pokemon</Label>
                <Input value={ searchQuery } onChange={ (event) => liveSearch(event) } id="pokemonName" name="pokemonName" placeholder="Ex: Blastoise" />
                <PrimaryButton onClick={ resetPokemons } mt={2}> Reset </PrimaryButton>
            </Box>
        </Flex>
    )
}

export default Search;