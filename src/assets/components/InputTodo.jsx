import React from 'react'

const InputTodo = ({addTask, todo, setTodo}) => {
  return (
    <div>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={() => addTask()}>add</button>
    </div>
  )
}

export default InputTodo