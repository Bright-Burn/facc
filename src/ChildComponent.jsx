import {useState} from "react";

export const ChildComponent = ({children, name}) => {
    const [pokemon, setPokemon] = useState(null)

    const getData = async () => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(pokemon => {
                setPokemon(pokemon)
            })
        return result
    }
    // React.Children.map(children, child => {
    //     if (typeof child === "function") {
    //         child({data: pokemon, getPokemon: getData})
    //     }
    //     return child
    // })
    return typeof children === "function"
        ? children({data: pokemon, getPokemon: getData})
        : children ??
        (
            <>{(pokemon ? <div className='cardBorder'>
                    <div>Name: {pokemon.name}</div>
                    <div>Weight: {pokemon.weight}</div>
                    <div>Height: {pokemon.height}</div>

                </div> : 'Введите имя покемона'
            )}
                <button onClick={getData}>get data</button>
            </>
        )
}