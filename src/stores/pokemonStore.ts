import { formatingPokemonId } from '@/utils'
import { defineStore } from 'pinia'

interface Pokemon {
  id: number
  name: string
  types: string[]
  img: string
}

export const usePokemonStore = defineStore('pokemonStore', {
  state: (): {
    pokemonsList: Pokemon[]
  } => ({
    pokemonsList: [],
    indexOfPokemons : 1
  }),
  getters: {
    pagePokemonList: (state) => {
      return state.pokemonsList.slice(0, 25)
    }
  },
  actions: {
    async fetchPokemons(startIndex: number, numberToFetch: number): Promise<void> {
      const newList: Pokemon[] = []
      for (let i = startIndex + 1; i <= startIndex + numberToFetch; i++) {
        const response = await (await fetch('https://pokeapi.co/api/v2/pokemon/' + i)).json()
        

        const pokemon: Pokemon = {
          id: response.id,
          name: response.forms[0].name,
          types: response.types.map(
            (pokemonType: { type: { name: string } }) => pokemonType.type.name
          ),
          img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatingPokemonId(response.id)}.png`
        }

        newList.push(pokemon)
      }
      console.log(this.pokemonsList,'22222')
      this.pokemonsList = newList
    }
  }
})
