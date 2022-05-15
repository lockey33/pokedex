import { ReactNode } from "react";

export interface MetaPokemon {
  id: number
  name: string
  image: string
  description: string | undefined
  height: string | undefined
  species: string | undefined
  weight: string | undefined
  types: []
}



export interface PokemonContextType {
  pokemons: MetaPokemon[]
  filteredPokemons: MetaPokemon[]
  setFilteredPokemons: (pokemons: MetaPokemon[]) => void
}

export interface PokemonDetails {
  pokemon: MetaPokemon
}

export interface BaseLayoutPropsWithData {
  children: ReactNode
  initialData: MetaPokemon[]
}


