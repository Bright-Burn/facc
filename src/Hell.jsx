import React, {useState} from "react";

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

    if (!pokemon) return <>
        Введите имя покемона
        <button onClick={getData}>get data</button>
    </>


    const defaultTemplate = (
        <>
            <Name name={pokemon.name}/>
            <Weight weight={pokemon.weight}/>
            <Height height={pokemon.height}/>
            <Append/>
        </>
    )

    const child = children({data: pokemon, getPokemon: getData})
    const extendMapper = React.Children.toArray(child.props.children)
        .reduce((acc, child) => {
            acc[child.type.name] = child
            return acc
        }, {})
    return React.Children.map(defaultTemplate.props.children, child => extendMapper[child.type.name] ?? child)

}
export const Name = ({name, children}) => children ??
    (
        <div>Name: {name}</div>

    )
const Weight = ({weight}) => <div>Weight: {weight}</div>
const Height = ({height}) => <div>Height: {height}</div>
export const Append = ({children}) => <>{children}</>