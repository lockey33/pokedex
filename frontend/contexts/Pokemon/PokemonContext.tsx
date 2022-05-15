import React, {createContext, useCallback, useState} from "react";
import {MetaPokemon, PokemonContextType, BaseLayoutPropsWithData} from "../../interfaces/Types";

export const PokemonContext = createContext<PokemonContextType|null>(null);

const PokemonProvider: React.FC<BaseLayoutPropsWithData> =  ({ children, initialData }) => {

    const [pokemons] = useState<MetaPokemon[]>(initialData)
    const [filteredPokemons, setFilteredPokemons] = useState<MetaPokemon[]>(initialData)


    return(
        <PokemonContext.Provider value={{pokemons, filteredPokemons, setFilteredPokemons }}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;

