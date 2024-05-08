import React from 'react'
import style from '../module/header.module.css'

const CreateTodoItem = ({todo, setTodo, createTodo}) => {
  return (
    <div>
        <input className={style.inputField} type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={createTodo}>add</button>
    </div>
  )
}

export default CreateTodoItem