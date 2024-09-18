/* eslint-disable react/prop-types */
function PokemonEncontrado({pokemon}) {
    return(
        <div className="pokemon" key={pokemon.id}>
            <h1>{pokemon.name.toUpperCase() +'!!'}</h1>
            <img src={pokemon.imagen}/>
            <audio autoPlay>
                <source src={pokemon.sonido} type="audio/ogg"/>
            </audio>
            <ul className="tipo">
                {
                    pokemon.tipos.map(tipos => (
                        <li  className='type' key={tipos.type.name}>
                            <p>{tipos.type.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

function PokemonNoEncontrado (){
    return (<p>Pokemon no encontrado en la Pokedex 😢</p>)
}

export function Pokemon ({pokemon}) {
    const hasPokemon = pokemon && pokemon.id
    return(
        hasPokemon ? <PokemonEncontrado pokemon={pokemon} /> : <PokemonNoEncontrado/>
    )
}