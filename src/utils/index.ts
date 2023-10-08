function formatingPokemonId(id: number) {
  if (id < 1000) {
    return `000${id}`.slice(-'000'.length)
  }
  return id
}

export { formatingPokemonId }
