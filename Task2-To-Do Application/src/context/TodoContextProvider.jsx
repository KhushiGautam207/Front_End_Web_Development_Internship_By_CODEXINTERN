import React, { useState } from "react";
import TodoContext from "./TodoContext";

function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (!text) return;

        const todo = {
            todoText: text,
            isComplete: false,
            id: Date.now(),
        };

        setTodos((prev) => [...prev, todo]);
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <TodoContext.Provider value={{ addTodo, todos, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;
