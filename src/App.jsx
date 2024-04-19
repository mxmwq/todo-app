import { useState } from "react"
import Header from "./assets/components/Header"
import InputTodo from "./assets/components/InputTodo"
import TaskTodo from "./assets/components/TaskTodo";

function App() {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const todoItem = {
      id: Math.random(),
      value: todo,
      isDone: false,
    }

    let newTasks = [todoItem, ...tasks]
    setTasks(newTasks);
  }

  const deleteTask = () => {

  }

  const changeCheckboxState = () => {
    
  }

  const taskTodoList = tasks.map((e) => <TaskTodo id ={e.id} value={e.value}/>)

  return (
    <>
      <div>
        <Header />
        <InputTodo addTask={addTask} todo={todo} setTodo={setTodo}/>
        {taskTodoList}
      </div>
    </>
  )
}

export default App
