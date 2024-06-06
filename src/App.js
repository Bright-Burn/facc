import './App.css';
import React, {useState} from "react";
import {SimpleChildComponent} from "./SimpleChildComponent";
import {Name, Append, ChildComponent} from "./Hell.jsx";

function App() {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"App"}>
            <ChildComponent name={inputValue}>
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
            </ChildComponent>

            <input type="text" onChange={handleInputChange}/>

        </div>
    );
}


export default App;