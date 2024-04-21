import React from 'react'
import TodoItem from './TodoItem'
import style from '../module/todoList.module.css'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className={style.todoList}>
      {todos?.length > 0 ? (
          <ul>
            {todos.map((todo, id) => 
              <TodoItem todo={todo} id={id} deleteTodo={deleteTodo}/>
            )}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
    </div>
  )
}

export default TodoList