import { formatingPokemonId } from '@/utils'
import { defineStore } from 'pinia'
import { getPokemonsAPI, getPokemonDetailsAPI } from '@/services/api'
import { Pokemon, PokemonDetails } from '@/utils/interface.ts'
export const usePokemonStore = defineStore('pokemonStore', {
  state: (): {
    pokemonsList: Pokemon[]
    pokemonDetails: PokemonDetails
    pageIndex: Number
  } => ({
    pokemonsList: [],
    pokemonDetails: {
      id: 0,
      name: '',
      height: 0,
      weight: 0,
      stats: [],
      types: [],
      img: ''
    },
    pageIndex: 1
  }),
  getters: {
    pokemonGetDetails: (state) => {
      return state.pokemonDetails
    }
  },
  actions: {
    async fetchPokemons(startIndex: number, numberToFetch: number): Promise<void> {
      const newList: Pokemon[] = []
      for (let i = startIndex + 1; i <= startIndex + numberToFetch; i++) {
        const response = await getPokemonsAPI(i)
        const pokemon: Pokemon = {
          id: response.id,
          name: response.forms[0].name,
          types: response.types.map(
            (pokemonType: { type: { name: string } }) => pokemonType.type.name
          ),
          img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatingPokemonId(
            response.id
          )}.png`
        }

        newList.push(pokemon)
      }
      this.pokemonsList = newList
    },
    async fetchPokemonDetails(
      nameOrId: string,
      searchResponse: Object | null = null
    ): Promise<void> {
      let response = {}
      if (searchResponse) {
        response = searchResponse
      } else {
        response = await getPokemonDetailsAPI(nameOrId)
      }
      if (response?.id) {
        this.pokemonDetails.id = response.id
        this.pokemonDetails.name = response.forms[0].name
        this.pokemonDetails.height = response.height / 10
        this.pokemonDetails.weight = response.weight / 10
        this.pokemonDetails.stats = response.stats.map(
          (stat: { stat: { name: string }; base_stat: number }) => {
            return {
              name: stat.stat.name,
              value: stat.base_stat
            }
          }
        )
        this.pokemonDetails.types = response.types.map(
          (pokemonType: { type: { name: string } }) => pokemonType.type.name
        )
        this.pokemonDetails.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatingPokemonId(
          response.id
        )}.png`
      }
    },
    updatePageIndex(pageIndex: number) {
      this.pageIndex = pageIndex
    }
  }
})
