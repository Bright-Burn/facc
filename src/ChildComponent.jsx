import React, {Children, useState} from "react";
import {type} from "@testing-library/user-event/dist/type";

export const ChildComponent = ({children, name}) => {
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
    return typeof children === 'function' ?
        children({data: pokemon, getPokemon: getData})
        : children ?? <>
        <div>Name: {pokemon.name}</div>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
        <button onClick={getData}>Get Data</button>
    </>
}