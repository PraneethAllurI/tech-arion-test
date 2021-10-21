import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Fetchh.css'

function Fetch() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('https://gorest.co.in/public/v1/todos');
            setTodos(result.data.data);
            console.log(result.data.data);
            return result;
        }
        fetchData();
    }, []);


    return (
        <div className="grid">
            <h1>data fetching</h1>
            <div className="grid__container">
                {todos.map((todo => (

                    <div className="grid__item">
                        <p>{todo.title}</p>
                        <p> {todo.user_id}</p>
                        <p> {todo.status} </p>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Fetch;
