import React from 'react'
import style from '../module/todoItem.module.css'

const TodoItem = ({todo, id, deleteTodo}) => {
  return (
    <div className={style.todo}>
      <li key={id}>{todo}</li>
      <button onClick={() => {deleteTodo(todo)}}>del</button>
    </div>
  )
}

export default TodoItem