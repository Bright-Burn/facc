import './App.css';
import React, {useState} from "react";
import {SimpleChildComponent} from "./SimpleChildComponent.jsx";
import {ChildComponent} from "./ChildComponent.jsx";
import {Name, Append, HellLikeChildComponent} from "./Hell.jsx";

function App() {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"App"}>
            {/*<div className={'cardBorder'}>*/}
            {/*    <SimpleChildComponent name={inputValue}/>*/}
            {/*</div>*/}

            <div className={'cardBorder'}>
                <ChildComponent name={inputValue}>
                    {({data, getPokemon}) => (
                        <div>
                            <img src={data.sprites.front_default}/>
                            <div>Name: {data.name}</div>
                            <div>Height: {data.height}</div>
                            <div>Weight: {data.weight}</div>
                            <button onClick={getPokemon}>Get Data</button>
                        </div>
                    )}
                </ChildComponent>
            </div>
            <div className={'cardBorder'}>
                <HellLikeChildComponent name={inputValue}>
                    {({data, getPokemon}) => (
                        <>
                            <Name name={data.name}>
                                <img src={data.sprites.front_default}/>
                            </Name>
                            <Append>
                                <button onClick={getPokemon}>Get Data</button>
                            </Append>
                        </>
                    )}
                </HellLikeChildComponent>
            </div>
            <input type="text" onChange={handleInputChange}/>

        </div>
    );
}


export default App;