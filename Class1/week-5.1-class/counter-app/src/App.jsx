import { useState } from 'react' //hook to define the state
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// todo
// {
//  todos: [{title:"todo1", description: "first "}]  
//}
function App() {
  //const [count, setCount] = useState(0);
  const [todos, setTodo] = useState([{
    title: "Go to gym",
    description: "Got to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA for 2 hours",
    completed: false
  }])

  function addTodo() {
    setTodo([...todos, {
      title: "boogy",
      description: "olalallalalal"
    }])
  }
  return (
    <>
      <div>
        {/*<CustomButton count={count} setCount={setCount}></CustomButton>
        <Todo title ="asgfad" description="adsfhb"></Todo>*/}
        <button onClick={addTodo}>Add a random Todo</button>
        {todos.map(function (todo) {
          return <Todo title={todo.title} description={todo.description}></Todo>
        })}
      </div>

    </>
  )
}
// todo app that takes an array of todos as input
function CustomButton(props) {

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>

}

export default App
