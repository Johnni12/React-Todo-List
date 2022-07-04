import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'

const TodoForm = () => {
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      const todos = { input }
      setTodo((todo) => {
        return [...todo, todos]
      })
      setInput('')
    }
  }

  return (
    <>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='todo-input'
          placeholder='Add a todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className='todo-button'>
          Add Todo
        </button>
      </form>

      {todo.map((todos, index) => {
        const { id, input } = todos
        return (
          <div key={index} className='todo-row'>
            <h3>{input}</h3>
            <RiCloseCircleLine />
          </div>
        )
      })}
    </>
  )
}

export default TodoForm
