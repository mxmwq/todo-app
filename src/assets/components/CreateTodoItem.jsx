import React from 'react'

const CreateTodoItem = ({todo, setTodo, addTodo}) => {
  return (
    <div>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={addTodo}>add</button>
    </div>
  )
}

export default CreateTodoItem