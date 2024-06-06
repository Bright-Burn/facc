import React, {useState} from "react";

export const HellLikeChildComponent = ({children, name}) => {
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
    const defaultTemplate = (
        <>
            <Name name={pokemon.name}/>
            <Height height={pokemon.height}/>
            <Weight weight={pokemon.weight}/>
            <Append></Append>
        </>)
    const child = children({data: pokemon, getPokemon: getData})
    const extendMapper = React.Children.toArray(child.props.children)
        .reduce((acc, child) => {
            acc[child.type.name] = child
            return acc
        }, {})

    return React.Children.map(defaultTemplate.props.children, child => extendMapper[child.type.name] ?? child
    )


}

export const Name = ({children, name}) => children ?? <div>Name: {name}</div>


const Weight = ({weight}) => <div>Weight: {weight}</div>
const Height = ({height}) => <div>Height: {height}</div>

export const Append = ({children}) => children
