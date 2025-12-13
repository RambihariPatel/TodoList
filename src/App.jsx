import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import List from './List'
import './App.css'

const App = () => {
  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState([])

  const addItem = () => {
    if (text.trim() === '') return

    const newTodoItem = {
      id: uuidv4(),
      item: text,
      done: false,
    }

    setTodoList([...todoList, newTodoItem])
    setText('')
  }

  const handleToggle = (itemId) => {
    const newTodoList = todoList.map((listItem) =>
      listItem.id === itemId
        ? { ...listItem, done: !listItem.done }
        : listItem
    )

    setTodoList(newTodoList)
  }

  const handleDelete = (itemId) => {
    const newTodoList = todoList.filter(
      (listItem) => listItem.id !== itemId
    )

    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div className="adder">
        <input
          type="text"
          placeholder="Add items to your list"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={addItem}>+</button>
      </div>

      <List
        todoList={todoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
