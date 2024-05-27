import React, { useState } from 'react';
import { postData, fetchData } from "../tools/requests";

const TodoList = ({ todoLists, setTodoLists }) => {
    const [newListTitle, setNewListTitle] = useState('');

    const createTodoList = () => {
        if (!newListTitle) {
            console.log('List title cannot be null or empty');
            return;
        }
        postData('http://localhost:8080/api/todolists', {title: newListTitle}, () => {
            setNewListTitle('');
            fetchData('http://localhost:8080/api/todolists', setTodoLists);
        });
    };

    return (
        <div>
            <h2>Todo Lists</h2>
            <input
                type="text"
                placeholder="New Todo List"
                value={newListTitle}
                onChange={(e) => setNewListTitle(e.target.value)}
            />
            <button onClick={createTodoList}>Create Todo List</button>
            {todoLists.map((list) => (
                <div key={list.id}>
                    <h2>{list.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default TodoList;