import React, { useState , useContext } from "react"
import TodoContext from "../context/TodoContext"

function TodoInput()
{
    const [input, setInput] = useState("")
    
    const { addTodo } = useContext(TodoContext)

    const handleTodo = (e) => {
        e.preventDefault()

        addTodo(input)
        setInput("")


    }
    return(
    <div>
        <input type= "text" value ={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleTodo}>Add Todo</button>
    </div>
  )
}

export default TodoInput