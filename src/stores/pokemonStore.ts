import { formatingPokemonId } from '@/utils'
import { defineStore } from 'pinia'
import { getPokemonsAPI, getPokemonDetailsAPI } from '@/services/api'
import type { Pokemon, PokemonDetails } from '@/utils/interface.ts'
export const usePokemonStore = defineStore('pokemonStore', {
  state: (): {
    pokemonsList: Pokemon[]
    pokemonDetails: PokemonDetails
    pageIndex: number
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
      nameOrId: string | string[],
      searchResponse: Object | null = null
    ): Promise<void> {
      const pokemonName = (Array.isArray(nameOrId) ? nameOrId[0] : nameOrId) ?? '';
      let response: any;
      if (searchResponse) {
        response = searchResponse
      } else {
        response = await getPokemonDetailsAPI(pokemonName)
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
    },
    sortPokemons(data: Number) {
      switch (data) {
        case 1:
          this.pokemonsList = this.pokemonsList.slice().sort((a, b) => a.id - b.id)
          break
        case 2:
          this.pokemonsList = this.pokemonsList.slice().sort((a, b) => a.name.localeCompare(b.name))
          break
        case 3:
          this.pokemonsList = this.pokemonsList.slice().sort((a, b) => b.name.localeCompare(a.name))
          break
        default:
          break
      }
    }
  }
})
