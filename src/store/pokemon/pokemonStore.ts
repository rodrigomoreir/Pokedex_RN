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

type Store = {
    pokemon: PokemonProps[]
    getPokemon: () => void
}

const usePokemonStore = create<Store>(set => ({
    pokemon: [],
    getPokemon: async () => {

        await api.get('pokedex/2/').then(response => {

            const result = response.data.pokemon_entries

            set({ pokemon: result })

        }).catch(error => {
            console.log('ERROR', error)
        })
    },
}))

export default usePokemonStore