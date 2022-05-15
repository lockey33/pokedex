import express, { Request, Response } from "express"
import { prisma } from "../prisma"

export const pokemonRouter = express.Router()

pokemonRouter.get("/", async (req: Request, res: Response) => {
    try{
        const pokemons = await prisma.pokemon.findMany({ select: { id: true, name: true, image:true}})
        res.status(200).json(pokemons)
    }catch(err){
        res.status(500).json(err)
    }

})

pokemonRouter.get("/:id", async (req: Request, res: Response) => {
    try{
        const pokemon = await prisma.pokemon.findUnique({where: {id: parseInt(req.params.id)}})
        res.status(200).json(pokemon)
    }catch(err){
        res.status(500).json(err)
    }
})