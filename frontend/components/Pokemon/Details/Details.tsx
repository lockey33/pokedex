import React  from "react";
import {DetailImage, StyledDetails} from "./Style";
import {PokemonDetails} from "../../../interfaces/Types";
import { Flex, Box, Text } from "rebass";

const Details: React.FC<PokemonDetails> = ({pokemon}) => {
    if(pokemon) {
        return (
            <>
                <Flex flexDirection={["column", "row" , "row"]} style={{padding: "4rem"}}>
                    <DetailImage src={pokemon.image} alt={pokemon.name}/>
                    <Box style={{textAlign: "left", width: "100%", alignItems: "start", justifyContent: "space-around"}}>
                        <StyledDetails style={{"alignItems": "start"}}>
                            <h2>{pokemon.name}</h2>
                            <Text pb={2}>
                                <span>Height:</span> {pokemon.height}
                            </Text>
                            <Text pb={2}>
                                <span>Species</span>: {pokemon.species}
                            </Text>
                            <Text pb={2}>
                                <span>Weight</span>: {pokemon.weight}
                            </Text>
                            <Flex pb={2}>
                                <span>Types : </span>
                                {pokemon.types && pokemon.types.map((type: string,  index: number) => (
                                    <Text key={index}>
                                        { index !== 0 && pokemon.types.length ? "/" + type : type }
                                    </Text>
                                ))}
                            </Flex>
                            <Text><span>Description</span> : {pokemon.description}</Text>
                        </StyledDetails>

                    </Box>
                </Flex>
            </>
        )
    }else{
        return <Flex justifyContent={"center"} alignItems={"center"}>Loading ... </Flex>
    }

}

export default Details