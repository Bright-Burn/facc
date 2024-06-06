import {useState} from "react";

export const SimpleChildComponent = ({name}) => {
    const [pokemon, setPokemon] = useState(null)

    const getData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        setPokemon(data)
    }
    if (!pokemon) return <>
        <button onClick={getData}>Get Data</button>
        Введите Имя
    </>

    return <>
        <div>Name: {pokemon.name}</div>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
        <button onClick={getData}>Get Data</button>
    </>


}