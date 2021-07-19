import React, { useContext, useState } from 'react';
import { DataContext, DataProvider } from './DataProvider';

export default function FormInput() {

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    
    const addTodos = (e) => {
        e.preventDefault();
        setTodos([...todos, {name: todoName, completed: false}])
        setTodoName('');
    }
    
    const handleInputChange = (e) => {
        setTodoName(e.target.value.toLowerCase())
    }

    return (
        <div>
            <form onSubmit={addTodos}>
                <input type="text" name="todos" placeholder="Enter your todos..." value={todoName} onChange={handleInputChange}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
