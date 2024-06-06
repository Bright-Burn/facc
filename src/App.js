import './App.css';
import React, {useState} from "react";
import {ChildComponent} from "./ChildComponent.jsx";
import {Name, Append, HellLikeChildComponent} from "./Hell.jsx";
import {SimpleChildComponent} from "./SimpleChildComponent.jsx";

function App() {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"App"}>
            <div className={'cardBorder'}>
                <SimpleChildComponent name={inputValue}/>
            </div>
            <div className={'cardBorder'}>
                <ChildComponent name={inputValue}>
                    {({data, getPokemon}) => {
                        return <>
                            {(data ? <>
                                    <img src={data.sprites.front_default} alt=""/>
                                    <div>Name: {data.name}</div>
                                    <div>Weight: {data.weight}</div>
                                    <div>Height: {data.height}</div>

                                </> : 'Введите имя покемона'
                            )}
                            <button onClick={getPokemon}>get data</button>
                        </>
                    }}
                </ChildComponent>
            </div>
            <div className={'cardBorder'}>
                <HellLikeChildComponent name={inputValue}>
                    {({data, getPokemon}) => {
                        return <>
                            <Name>
                                <img src={data.sprites.front_default} alt=""/>
                                <div>Name: {data.name}</div>
                            </Name>

                            <Append>
                                <button onClick={getPokemon}>get data</button>
                            </Append>
                        </>
                    }}
                </HellLikeChildComponent>
            </div>
            <input type="text" onChange={handleInputChange}/>

        </div>
    );
}


export default App;