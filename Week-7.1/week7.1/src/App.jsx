// import { Suspense, useState, lazy } from 'react'

// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

// //import { Dashboard } from './components/dashboard'
// // const Dashboard = lazy(() => import('./components/dashboard'))
// // const Landing = lazy(() => import('./components/landing'))
// //import { Landing } from './components/landing'


// function App() {
//   const [count, setCount] = useState(0);
//   return <div>
//     <Count count={count}  />
//     <Buttons />
//   </div>
// }

// function Count({ count, setCount }) {
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({count, setCount}) {
//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase Count</button>
//     <br></br>
//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease Count</button>
//   </div>
// }

// // function App() {
// //   //const navigate = useNavigate();

// //   return (
// //     <div>
// //       <BrowserRouter>
// //         <Appbar />
// //         <Routes>
// //           <Route path="/dashboard" element={<Suspense fallback="...loading"><Dashboard /></Suspense>}></Route>
// //           <Route path="/" element={<Suspense fallback="...loading"><Landing /> </Suspense>}></Route>
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   )
// // }

// // function Appbar() {
// //   const navigate = useNavigate();
// //   return <div>
// //     <h2>This the is app bar</h2>
// //     <button onClick={() => {
// //       navigate("/");
// //     }}>landing page</button>
// //     <button onClick={() => {
// //       navigate("/dashboard");
// //     }}>dashboard page</button>

// //   </div>
// // }

// export default App

import { useState } from "react"
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);

  //  wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
      
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const {count,setCount} = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
