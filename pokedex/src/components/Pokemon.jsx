/* eslint-disable react/prop-types */
function PokemonEncontrado({pokemon}) {
    return(
        <div className="pokemon" key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default}/>
            <ul className="habilidades">
                {
                    pokemon.abilities.map(ability => (
                        <li  className='ability' key={ability.name}>
                            <p>{ability.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

function PokemonNoEncontrado (){

    return (<p>Pokemon no encontrado en la Pokedex </p>)
}

export function Pokemon ({pokemon}) {
    const hasPokemon = pokemon?.length > 0
    return(
        hasPokemon ? <pokemonEncontrado pokemon={pokemon} /> : <PokemonNoEncontrado/>
    )
}