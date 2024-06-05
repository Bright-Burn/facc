import {useState} from "react";

export const ChildComponent = ({children, todoId}) => {
    const [todos, setTOdos] = useState([])
    const getData = async () => {
        const result= await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => response.json())
            .then(todos => {
                setTOdos(todos)
            })
        return result
    }
    console.log(typeof children)
    console.log(children)
    return typeof children === "function"
        ?  children({data: todos, getTodo: getData})
        : children ??
     (
        <div>Child Component</div>
    )
}