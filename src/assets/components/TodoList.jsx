import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <>
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
    </>
  )
}

export default TodoList