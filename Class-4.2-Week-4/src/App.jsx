import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <div>
        <input id='todo' type='text' placeholder='Todo'></input>
      </div>
      <div>
        <input id ='description' type='text' placeholder='Description'></input>
      </div>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

    </div>


  )
}

export default App
