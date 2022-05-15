import type { NextPage } from 'next'
import React from "react";
import { MetaPokemon } from '../../interfaces/Types';
import Details from "../../components/Pokemon/Details/Details";


export async function getServerSideProps(context: any) {
    const { id } = context.query
    const res = await fetch("http://localhost:3001/pokemons/" + id)
    const data = await res.json()
    return {
        props: { pokemon: data},
    };
}


const Pokemon: NextPage<{pokemon:MetaPokemon|null}> = ({pokemon}) => {
    return pokemon ?
        <>
            <Details pokemon={pokemon} />
        </>
        :
        <div>Loading...</div>
}

export default Pokemon
