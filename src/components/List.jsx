import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {

    const[todos, setTodos] =  useContext(DataContext);
    const changeCheck = id => {
        const newTodos = [...todos];
        newTodos.map((todo, index) => {
            if (index === id) {
                todo.completed = !todo.completed
            }
        })
        setTodos(newTodos);

    }

    const handleEditTodos = (editValue, id) => {
        const newTodos = [...todos];
        newTodos.map((todo, index) => {
            if (index === id) {
                todo.name = editValue
            }
        })

        setTodos(newTodos);
    }

    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index} checkCompleted={changeCheck} handleEditTodos={handleEditTodos}/>
                ))
            }
        </ul>
    )
}
