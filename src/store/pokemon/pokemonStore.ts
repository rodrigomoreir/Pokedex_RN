import create from "zustand";
import { persist } from "zustand/middleware";
import api from '../../services/api';

interface PokemonSpeciesProps {
    name: string
    url: string
}
export interface PokemonProps {
    entry_number: Number
    pokemon_species: PokemonSpeciesProps
}

interface PokemonTypesProps {
    slot: Number
    type: {
        name: String
        url: String
    }
}

type Store = {
    pokemon: PokemonProps[]
    pokemonCharacteristics: PokemonTypesProps[]
    getPokemon: () => void
    // getPokemonCharacteristics: () => void
}

const usePokemonStore = create<Store>(set => ({
    pokemon: [],
    pokemonTest: [],
    pokemonCharacteristics: [],
    getPokemon: async () => {

        await api.get('pokedex/2/').then(response => {

            const result = response.data.pokemon_entries

            set({ pokemon: result })

        }).catch(error => {
            console.log('ERROR', error)
        })
    },
    getPokemonCharacteristics: async (pokemonName: String) => {

        await api.get(`pokemon/${pokemonName}`).then(response => {

            const result = response.data.types

            set({ pokemonCharacteristics: result })

        }).catch(error => {
            console.log('ERROR', error)
        })

    }
}))

export default usePokemonStore