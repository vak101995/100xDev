import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react'
import { useMemo } from 'react';


function App() {
  //const [selecteId, setSelecteId] = useState(1);

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1)

  let sum = useMemo(() => {
    let s = 0;
    for (let i = 1; i <= inputValue; i++) {
      s = s + i;
    }
    return s;
  }, [inputValue]);


  return <div>
    {/* <button onClick={function () {
      setSelecteId(1);
    }} id='1'>1</button>
    <button onClick={function () {
      setSelecteId(2);
    }} id='2'>2</button>
    <button onClick={function () {
      setSelecteId(3);
    }} id='3'>3</button>
    <button onClick={function () {
      setSelecteId(4);
    }} id='4'>4</button>
    <Todo id={selecteId} /> */}
    <input onChange={function (e) {
      setInputValue(e.target.value)
    }} type='text'></input>
    <br>
    </br>sum from 1 to {inputValue} is {sum} <br>
    </br>
    <button onClick={function () {
      setCount(count + 1)
    }}>Counter ({count})</button>
  </div>
}



// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async function (res) {
//         const json = await res.json();
//         setTodo(json.todo);
//       })
//   }, [id]) //paswsing id here dictates that the useEffect hook should run everytime id changes

//   return <div>
//     Id: {id}
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }
export default App
