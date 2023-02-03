import './App.css'
import {useState} from 'react'

function App() {
const [input, setInput] = useState("")
const [todos, setTodos] = useState([])


function addTodo() {
  const item = {
    id : Math.floor(Math.random() * 1000),
    value : input, 
    status : false,
  }

  setTodos(oldTodos => [...oldTodos, item])
  setInput('')

}

function deleteTodo(id) {
  const newTodoList = todos.filter(todo => todo.id !== id)
  setTodos(newTodoList)
}

function doneTodo(id) {
  const todoIndex = todos.findIndex(todo =>todo.id == id)  
  const tmpTodos = [...todos]
  tmpTodos [todoIndex].status = true
  setTodos(tmpTodos)
}
  return (
    <div className="App">
      <input onChange={e => setInput(e.target.value)} value={input}placeholder='Todo List'/>
      <button onClick={() => addTodo()}>Submit</button>
      <br />
      <ul>
        {todos.map(todo =>{
          return (
            <li key={todo.id} style={{textDecoration: todo.status ? 'line-through' : ''}}>
              {todo.value}
              <button onClick={() => deleteTodo(todo.id)}>❌</button>
              <button onClick={() => doneTodo(todo.id)}>✔️</button>
              </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
