import { useState } from "react"
import Header from "./assets/components/Header"
import CreateTodoItem from "./assets/components/CreateTodoItem"
import TodoList from "./assets/components/TodoList";
import style from './assets/module/app.module.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    if(todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    })
    setTodos(newTodos);
  }
  
  console.log(todos)

  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <CreateTodoItem todo={todo} setTodo={setTodo} createTodo={createTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
