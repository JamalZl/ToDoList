import React, { useState } from 'react';
import Todoform from './ToDoForm';
import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({ todos, removeTodo }) => {

    return todos.map((todo, index) => (
        <div className='todo-row' key={index} >
            <div key={todo.id}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='remove-icon' />
            </div>
        </div>
    ));
}

export default Todo;


