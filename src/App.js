import React from 'react';
import './assets/styles/App.css';
import Todolist from './components/ToDoList';

function App() {
  return (
    <div className='generalDiv'>
       <div className="todo-app">
         <Todolist/>
        </div>
    </div>
   
  );
}

export default App;
