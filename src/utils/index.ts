function formatingPokemonId(id :number) :string {
    return `000${id}`.slice(-'000'.length)
  }
  
  export {
    formatingPokemonId
  };
  