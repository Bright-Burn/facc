import './App.css';
import {useState} from "react";
import {ChildComponent} from "./ChildComponent.jsx";
import {SimpleChildComponent} from "./SimpleChildComponent";

function App() {
    const [todos, setTodos] = useState([
        'первое дело',
        'второе дело',
        'третье дело'
    ])
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const addTodo = () => {
        setTodos([...todos, inputValue])
    }


    return (
        <div className={"App"}>
            <SimpleChildComponent name={inputValue}/>
            <ChildComponent name={inputValue}>
                {({data, getPokemon}) => {
                    return <>{(data ? <>
                            <div>Name: {data.name}</div>
                            <div>Weight: {data.weight}</div>
                            <div>Height: {data.height}</div>

                        </> : 'Введите имя покемона'
                    )}
                        <button onClick={getData}>get data</button>
                    </>
                }}
            </ChildComponent>
            {/*<ChildComponent>*/}
            {/*    <ChildComponent data={inputValue} todoId={inputValue}>*/}
            {/*        {({data, getTodo}) => {*/}
            {/*            return <div>Это дочерний компонент: {data.title}*/}
            {/*                <button onClick={getTodo}>add</button>*/}
            {/*            </div>*/}
            {/*        }}*/}
            {/*    </ChildComponent>*/}
            {/*</ChildComponent>*/}
            <input type="text" onChange={handleInputChange}/>
            <button onClick={addTodo}>Добавить туду</button>

        </div>
    );
}


export default App;
