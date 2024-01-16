import { useEffect, useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//let counter = 4;
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").
        then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 10000)

  }, [])

  return <>
    <CardWrapper>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </CardWrapper>

  </>
}

function TextComponent() {
  return <div>
    Execute order 66
  </div>
}


function CardWrapper({ children }) {
  return <div style={{ border: "2px solid white", padding: 10, margin: 10 }}>
    {children}
  </div>
}

// function HeaderWithbutton() {


//   return <div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//   </div>


// }

// const [todos, setTodos] = useState([{
//   id: 1,
//   title: "got to fmy",
//   description: "dzrhwd"
// }, {
//   id: 2,
//   title: "got to srdt",
//   description: "dzraerhhwd"
// }, {
//   id: 3,
//   title: "got to play",
//   description: "dzrhwd"
// }]);

// function addTodo() {
//   setTodos([...todos, {
//     id: counter++,
//     title: Math.random(),
//     description: Math.random()
//   }])
// }

// return (

//   <div>
//     <button onClick={addTodo}>Add a todo</button>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//   </div>


// )
function Todo({ title, description }) {
  return <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
  </div>
}

// const Header = React.memo(function Header({ title }) {
//   return <div>
//     {title}
//   </div>
// })

// function Header({ title }) {
//   return <div>
//     {title}
//   </div>
// }

export default App
