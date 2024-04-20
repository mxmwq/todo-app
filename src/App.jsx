import { useState } from "react"
import Header from "./assets/components/Header"
import CreateTodoItem from "./assets/components/CreateTodoItem"
import TodoList from "./assets/components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
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
      <div>
        <Header />
        <CreateTodoItem todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
