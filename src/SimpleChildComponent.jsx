import {useState} from "react";

export const SimpleChildComponent = ({children, todoId}) => {
    const [todos, setTOdos] = useState([])
    const getData = async () => {
        const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => response.json())
            .then(todos => {
                setTOdos(todos)
            })
        return result
    }
    console.log(typeof children)
    console.log(children)
    return (<>
            <div>Child Component</div>
            <button onClick={getData}>get data</button>
        </>
    )
}