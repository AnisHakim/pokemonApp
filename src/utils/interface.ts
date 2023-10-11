export interface PokemonStat {
  name: string
  value: number
}
export interface Pokemon {
  id: number
  name: string
  types: string[]
  img: string
}
export interface PokemonDetails {
  id: number
  name: string
  height: number
  weight: number
  stats: PokemonStat[]
  types: string[]
  img: string
}
