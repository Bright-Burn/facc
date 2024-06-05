import './App.css';
import {useState} from "react";
import {ChildComponent} from "./ChildComponent.jsx";
import {SimpleChildComponent} from "./SimpleChildComponent";

function App() {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"App"}>
            <SimpleChildComponent name={inputValue}/>
            <ChildComponent name={inputValue}>
                {({data, getPokemon}) => {
                    return <>
                        {(data ? <div className={'cardBorder'}>
                                <img src={data.sprites.front_default} alt=""/>
                                <div>Name: {data.name}</div>
                                <div>Weight: {data.weight}</div>
                                <div>Height: {data.height}</div>

                            </div> : 'Введите имя покемона'
                        )}
                        <button onClick={getPokemon}>get data</button>
                    </>
                }}
            </ChildComponent>

            <input type="text" onChange={handleInputChange}/>

        </div>
    );
}


export default App;
