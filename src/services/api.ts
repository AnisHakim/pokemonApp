export const getPokemonsAPI = async (i: number) => {
  try {
    //Normally we should make the base url in .env file
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
    if (response.ok) {
      return await response.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  } catch (error) {
    alert(error)
    throw error
  }
}

export async function getPokemonDetailsAPI(nameOrId: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    throw new Error('Error fetching Pokemon details: ' + error)
  }
}
