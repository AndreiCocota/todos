import React, { useState, useContext } from 'react'
import { DataContext } from './DataProvider';

export default function ListItem({todo, id, checkCompleted, handleEditTodos}) {

    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.name)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckbox = () => {
        checkCompleted(id)
    }

    const handleEdit = () => {  
        setOnEdit(true)
    }

    const handleSave = id => {
        setOnEdit(false)

        if(editValue) {
            handleEditTodos(editValue, id);
        } else {
            setEditValue(todo.name)
        }
    }
    
    const deleteTodo = () => {
        setTodos(prevItems => {
            return prevItems.filter((todo, index) => {
              return index !== id;
            });
          });
        
    }

    if(onEdit) {
        return (
            <li>
                <input className="edit-input" type="text" id="editValue" value={editValue} name="editValue" onChange={(e) => setEditValue(e.target.value.toLowerCase())}/>
                <div className="list-buttons">
                    <button className="yellow-button" onClick={() => handleSave(id)} >Save</button>
                </div>
            </li>
        )
    } else {
        return (
            <li>
                <label htmlFor={id} className={todo.completed ? "checked-list" : ""}>
                    <input type="checkbox" id={id} checked={todo.completed} onChange={handleCheckbox}/>
                    {todo.name}
                </label>
                <div className="list-buttons">
                <button className="blue-button" disabled={todo.completed} onClick={handleEdit}>Edit</button>
                <button className="red-button" onClick={deleteTodo}>Delete</button>
                </div>
            </li>
        )
    }
}
