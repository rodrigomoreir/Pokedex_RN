import create from "zustand";
import { persist } from "zustand/middleware";
import api from '../../services/api';

const usePokemonStore = create(set => ({
    pokemon: [
        // {
        //     pokedexNumber: 1,
        //     name: 'Bulbasaur'
        // },
    ],
    getPokemon: () => set(state => {

        api.get('pokedex/2/').then(response => {
            // console.log('RESPONSE', response)
            state.pokemon = [
                ...state.pokemon,
                {
                    pokedexNumber: response.data.pokemon_entries.map(pokedex => pokedex.entry_number),
                    name: response.data.pokemon_entries.map(pokedex => pokedex.pokemon_species.name)
                }
            ]
            // return pokemon
            // console.log('TEST', response.data.pokemon_entries.map((pokedex) => pokedex.pokemon_species.name))
        }).catch(error => {
            console.log('ERROR', error)
        })


    })
}))

export default usePokemonStore