export const  searchPokemon = async ({search}) => {
    if(search === '') return null

    try{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const json = await response.json()

        const pokemon = json.Search
        return pokemon?.map(pokemon => (
            {
                id: pokemon.id,
                name: pokemon.name,
                imagen: pokemon.sprites.front_default,
                abililities: pokemon.abilities
            }            
        ))

    }catch(e){
        throw new Error('Error searching pokemones')
    }
}