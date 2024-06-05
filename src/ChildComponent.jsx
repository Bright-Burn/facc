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
    return typeof children === "function"
        ? children({data: pokemon, getPokemon: getData})
        : children ??
        (
            <>{(pokemon ? <>
                    <div>Name: {pokemon.name}</div>
                    <div>Weight: {pokemon.weight}</div>
                    <div>Height: {pokemon.height}</div>

                </> : 'Введите имя покемона'
            )}
                <button onClick={getData}>get data</button>
            </>
        )
}