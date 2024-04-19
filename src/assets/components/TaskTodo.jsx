import React from 'react'

const TaskTodo = ({id, value}) => {
  return (
    <div key={id}>
        <input type="checkbox" />
        <p>{value}</p>
        <button>del</button>
    </div>
  )
}

export default TaskTodo