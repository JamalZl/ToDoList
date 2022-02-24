import React, { useState } from 'react';
import Todo from './ToDo';
import Todoform from './ToDoForm';

const Todolist = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    return (
        <div>
            <h1>Write down your todos</h1>
            <Todoform onSubmit={addTodo} />
            <Todo todos={todos} removeTodo={removeTodo} />
        </div>
    );
}
export default Todolist;
